/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react" // eslint-disable-line no-unused-vars

import SubHeading from "../sub-heading"
import { List, ListItem } from "../list"

import useResumeQuery from "../../hooks/useResumeQuery"
import formatDate, { formats } from "../../utils/formatDate"
import { linkStyles } from "../link"

const CompanyExperience = ({
  startDate,
  endDate,
  position,
  name,
  location,
  highlights,
}) => {
  // UTC Edge cases be damned! 😜
  const startDateFormatted = formatDate(startDate, formats.MonthAndYear)
  const endDateFormatted = endDate
    ? formatDate(endDate, formats.MonthAndYear)
    : "Present"

  return (
    <ListItem>
      <strong>
        {position}, {name}
      </strong>
      &nbsp;&#x2014;&nbsp;
      <i>
        {startDateFormatted} - {endDateFormatted}
      </i>
      &nbsp;&#x2014;&nbsp;
      <i>{location}</i>
      <ul>
        {highlights.map((h, i) => (
          <li
            sx={{
              a: linkStyles,
            }}
            key={i}
            dangerouslySetInnerHTML={{ __html: h }}
          />
        ))}
      </ul>
    </ListItem>
  )
}

/**
 * Work experience section in the resume page
 */
const WorkExperience = () => {
  const { work } = useResumeQuery()

  return (
    <>
      <SubHeading>Experience</SubHeading>
      <Box
        sx={{
          fontSize: 2,
        }}
      >
        <List>
          {work.map(w => (
            <CompanyExperience key={w.startDate} {...w} />
          ))}
        </List>
      </Box>
    </>
  )
}

export default WorkExperience
