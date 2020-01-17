import React from "react"
import { Box } from "rebass/styled-components"

import SubHeading from "../sub-heading"
import { List, ListItem } from "../list"

import formatDate, { formats } from "../../utils/formatDate"
import useResumeQuery from "../../hooks/useResumeQuery"

const EducationRow = ({
  area,
  courses,
  institution,
  startDate,
  endDate,
  studyType,
}) => {
  // UTC Edge cases be damned! 😜
  const startDateFormatted = formatDate(startDate, formats.Year)
  const endDateFormatted = endDate
    ? formatDate(endDate, formats.Year)
    : "Present"

  return (
    <ListItem>
      <strong>
        {studyType}, {area}, {institution}
      </strong>
      &nbsp;&#x2014;&nbsp;
      <i>
        {startDateFormatted} - {endDateFormatted}
      </i>
      {courses && (
        <div>
          <i>Courses:&nbsp;{courses.join(", ")}</i>
        </div>
      )}
    </ListItem>
  )
}

const Education = () => {
  const { education } = useResumeQuery()

  return (
    <>
      <SubHeading>Education</SubHeading>
      <Box fontSize={2}>
        <List>
          {education.map(p => (
            <EducationRow key={p.institution} {...p} />
          ))}
        </List>
      </Box>
    </>
  )
}

export default Education
