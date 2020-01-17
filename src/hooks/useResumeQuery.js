import { useStaticQuery, graphql } from "gatsby"

/**
 * Hook to bring down json resume data
 */
const useResumeQuery = () => {
  const jsonResume = useStaticQuery(graphql`
    {
      dataJson {
        basics {
          email
          label
          location {
            city
            countryCode
          }
          name
          phone
          profiles {
            network
            url
            username
          }
          summary
          website
        }
        education {
          area
          courses
          endDate
          institution
          startDate
          studyType
        }
        interests
        meta {
          canonical
          lastModified
        }
        projects {
          description
          name
          url
        }
        skills {
          keywords
          name
        }
        work {
          endDate
          highlights
          location
          name
          position
          startDate
          summary
          website
        }
      }
    }
  `)

  return { ...jsonResume.dataJson }
}

export default useResumeQuery
