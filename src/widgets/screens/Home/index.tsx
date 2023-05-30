import { Hero } from './Hero/Hero'
import { Services } from './Services/Services'
import { Benefits } from './Benefits/Benefits'
import { ServicesTicker } from './ServicesTicker/ServicesTicker'
import { Partners } from './Partners/Partners'
import { Technologies } from './Technologies/Technologies'
import { TeamTicker } from './TeamTicker/TeamTicker'
import { Projects } from './Projects/Projects'
import { Testimonials } from './Testimonials/Testimonials'
import { Team } from './Team/Team'
import { Contact } from './Contact/Contact'

export const homeScreens = [
  {
    id: 0,
    element: <Hero />,
  },
  {
    id: 1,
    element: <Services />,
  },
  {
    id: 2,
    element: <Benefits />,
  },
  {
    id: 3,
    element: <ServicesTicker />,
  },
  {
    id: 4,
    element: <Partners />,
  },
  {
    id: 5,
    element: <Projects />,
  },
  {
    id: 6,
    element: <Technologies />,
  },
  {
    id: 7,
    element: <Testimonials />,
  },
  {
    id: 8,
    element: <TeamTicker />,
  },
  {
    id: 9,
    element: <Team />,
  },
  {
    id: 10,
    element: <Contact />,
  },
]
