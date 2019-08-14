import React from 'react'
import styled from 'styled-components'
import WidthWrapper from './WidthWrapper'
import StickyTitle from './StickyTitle'
import IconCreate from './animatedIcons/Create'
import IconDefine from './animatedIcons/Define'
import IconDesign from './animatedIcons/Design'
import IconPolish from './animatedIcons/Polish'
import IconReferences from './animatedIcons/References'
import IconResearch from './animatedIcons/Research'
import IconValidate from './animatedIcons/Validate'

const _Process = styled.div``

const Section = styled.section`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 5rem repeat(3, 1fr);
  grid-template-rows: 5rem repeat(2, 1fr);
  grid-template-areas:
    'i t t t'
    'c c c c'
    'c c c c';
  grid-gap: 0.75rem;

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    grid-gap: 1rem 1.5rem;
    grid-template-columns: 6rem repeat(3, 1fr);
    grid-template-rows: 2.5rem repeat(2, 1fr);
    grid-template-areas:
      'i t t t'
      'i c c c'
      'i c c c';
  }
`
const SectionIcon = styled.div`
  grid-area: i;
`
const SectionTitle = styled.div`
  grid-area: t;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  color: ${props => props.theme.colors.darkGrey};

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
  }
`
const SectionContent = styled.div`
  grid-area: c;
  font-size: 1.125rem;
`

const Process = () => (
  <_Process>
    <WidthWrapper>
      <StickyTitle>My Process</StickyTitle>

      <Section>
        <SectionIcon>
          <IconResearch />
        </SectionIcon>
        <SectionTitle>Research</SectionTitle>
        <SectionContent>
          <p>
            Having enough context and doing the right research can make all the
            difference in the successful implementation of a product. For me,
            this usually involves looking at publications, analyzing best
            practices &amp; competitors, and interviewing target users. From the
            information I gather, I jot down my findings and start creating user
            persona, storyboards, and user-flows. It’s also vital to consider
            and discuss business goals at this point, to ensure mutual
            understanding between all stakeholders.
          </p>

          <p>
            Occasionally, team brainstorming sessions or even a design sprint
            may be necessary depending on the scope and scale of the project.
            After the data and information has all been recorded, I filter out
            and refine the ideas for creating a requirements document.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionIcon>
          <IconDefine />
        </SectionIcon>
        <SectionTitle>Define Requirements</SectionTitle>
        <SectionContent>
          <p>
            After condensing the research down to the
            personas/storyboards/user-flows, I present them along with other key
            findings to the development team and any stakeholders. It’s not
            always enough to be just “good”, or “in accordance with best
            practices or industry standards”, so I try to work in extra value
            for the user that isn’t offered anywhere else; sometimes this
            involves taking risks, but it can also just be ensuring fast and
            iterative cycles that continuously adapt and improve.
          </p>

          <p>
            If necessary, it’s at this point that compromises need to be made
            between business and user needs. By having both a technical and
            business understanding, I can consult and resolve issues here
            between parties. When all is said and done, I create a requirements
            doc, tasks, and issues, using a project management system (be it
            Asana, Atlassian, GitHub, etc.), and assign them to team members
            appropriately.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionIcon>
          <IconCreate />
        </SectionIcon>
        <SectionTitle>Create the Plan</SectionTitle>
        <SectionContent>
          <p>
            I usually start off with a site map or information architecture flow
            to help organize the requirements visually. Creating something fast
            and sharing with peers is a great way of fine-tuning the details. I
            also test experimental hypotheses (How-Might-We’s, stretch goals) at
            this point too, and user-test certain user interactions and flows.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionIcon>
          <IconDesign />
        </SectionIcon>
        <SectionTitle>Design</SectionTitle>
        <SectionContent>
          <p>
            Wireframes, mockups, prototypes. All with rapid review and iteration
            cycles in between. I make and share designs as quickly as possible
            to garner feedback and perspectives. For certain interactions or
            interfaces, I code the prototypes myself for interactive prototypes
            for “pixel perfect” design, animation, and timing.
          </p>

          <p>
            They say a picture is worth a thousand words. Well an interactive
            prototype is worth 100 hours of meetings and deliberation. Why show,
            when you can experience?
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionIcon>
          <IconPolish />
        </SectionIcon>
        <SectionTitle>Polish</SectionTitle>
        <SectionContent>
          <p>
            Small issues can pile up. Some issues are so small, they can get
            ignored entirely. While there are definite benefits to having faster
            development cycles, it’s good to stop every once in a while to take
            care of all the little things that can turn into huge problems later
            on (e.g. responsiveness, localization [i18n], accessibility [WCAG
            2.0], design inconsistencies, etc.). During this time, I provide
            mentorship to the developers/designers to train everyone to be more
            attentive and to follow design/development guidelines.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionIcon>
          <IconValidate />
        </SectionIcon>
        <SectionTitle>Validate and Iterate</SectionTitle>
        <SectionContent>
          <p>
            Conducting stability/stress tests, and re-evaluating the UX on a
            production server is crucial, as new problems can be uncovered that
            didn’t exist before. I also conduct regular user testing and data
            collection to monitor the health of new and existing features. It’s
            a good opportunity to learn about the ever-changing needs of users,
            while identifying pain points.
          </p>
          <p>
            Metrics are an easy way of revealing trends and issues, but the hard
            part is recording and looking at the right data. I can filter out
            the noise to reveal what the biggest issues are, and prioritize them
            using a value vs difficulty decision matrix.
          </p>

          <p>
            It goes without saying that design is iterative; no solution is ever
            perfect. After testing and issue documentation, I start all over
            again — unless there’s new problems to tackle!
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionIcon>
          <IconReferences />
        </SectionIcon>
        <SectionTitle>My Core References</SectionTitle>
        <SectionContent>
          <p>
            I owe a lot of what I know to online publications and literature.
            Here are some of my favourite and most useful books:
          </p>
          <ul>
            <li>
              <a
                href="https://www.amazon.ca/UX-Strategy-Innovative-Digital-Products/dp/1449372864"
                target="_blank">
                <em>UX Strategy</em>
              </a>{' '}
              by Jaime Levy
            </li>
            <li>
              <a
                href="https://www.amazon.ca/Elements-User-Experience-User-Centered-Design/dp/0321683684"
                target="_blank">
                <em>The Elements of User Experience</em>
              </a>{' '}
              by Jesse James Garrett
            </li>
            <li>
              <a
                href="https://www.amazon.ca/Hacking-Growth-Fastest-Growing-Companies-Breakout/dp/045149721X"
                target="_blank">
                <em>Hacking Growth</em>
              </a>{' '}
              by Sean Ellis and Morgan Brown
            </li>
            <li>
              <a
                href="https://www.amazon.ca/Visual-Display-Quantitative-Information-2nd/dp/0961392142"
                target="_blank">
                <em>The Visual Display of Quantitative Information</em>
              </a>
              ,
              <a
                href="https://www.amazon.ca/Envisioning-Information-R-Tufte/dp/0961392118"
                target="_blank">
                <em>Envisioning Information</em>
              </a>
              , and
              <a
                href="https://www.amazon.ca/Beautiful-Evidence-Edward-R-Tufte/dp/0961392177"
                target="_blank">
                <em>Beautiful Evidence</em>
              </a>{' '}
              by Edward Tufte
            </li>
            <li>
              <a
                href="https://www.amazon.ca/Hooked-How-Build-Habit-Forming-Products-ebook/dp/B00P8B75Z4"
                target="_blank">
                <em>Hooked</em>
              </a>{' '}
              by Nir Eyal
            </li>
          </ul>
          <p>
            Honourable mention goes to{' '}
            <a
              href="https://www.amazon.ca/Design-Everyday-Things-Revised-Expanded/dp/0465050654"
              target="_blank">
              <em>Design of Everyday Things</em>
            </a>{' '}
            by Don Norman and{' '}
            <a
              href="https://www.amazon.ca/Dont-Make-Think-Revisited-Usability/dp/0321965515"
              target="_blank">
              <em>Don’t Make Me Think</em>
            </a>{' '}
            by Steve Krug, which were the books that got me interested in UX.
          </p>
        </SectionContent>
      </Section>
    </WidthWrapper>
  </_Process>
)
export default Process
