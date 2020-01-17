import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"

import SubHeading from "../sub-heading"
import { List, ListItem } from "../list"
import { linkStyles } from "../link"

import useResumeQuery from "../../hooks/useResumeQuery"
import formatDate, { formats } from "../../utils/formatDate"

const HighlightListItem = styled.li`
  & a {
    ${linkStyles}
  }
`

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
          <HighlightListItem key={i} dangerouslySetInnerHTML={{ __html: h }} />
        ))}
      </ul>
    </ListItem>
  )
}

const WorkExperience = () => {
  const { work } = useResumeQuery()

  return (
    <>
      <SubHeading>Experience</SubHeading>
      <Box fontSize={2}>
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
