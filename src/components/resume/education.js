/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react" // eslint-disable-line no-unused-vars

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
      {courses.length && (
        <div>
          <i>Relevant Courses:&nbsp;{courses.join(", ")}</i>
        </div>
      )}
    </ListItem>
  )
}

/**
 * Education section in the resume
 */
const Education = () => {
  const { education } = useResumeQuery()

  return (
    <>
      <SubHeading>Education</SubHeading>
      <Box
        sx={{
          fontSize: 2,
        }}
      >
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
