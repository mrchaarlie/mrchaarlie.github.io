import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from 'components/Header'
import Section from 'components/Section'
import TwoColWrapper from 'components/TwoColWrapper'
import WidthWrapper from 'components/WidthWrapper'
import TextWrapper from 'components/TextWrapper'
import ImageWrapper from 'components/ImageWrapper'
import imgHomeScreenshot from '../img/work/100+-accelerator-hero.png'
import imgMobileComparison from '../img/work/100a-mobile.png'
import imgFormComparison from '../img/work/100a-form.png'

export default () => (
  <>
    <Helmet>
      <title>Charles Wu | 100+ Accelerator </title>
    </Helmet>
    <Header showShadow={true} title={'100+ Accelerator'} homeLink={true} />

    <WidthWrapper>
      <Section first={true}>
        <h4>Summary</h4>
        <p>
          100+ Accelerator is ABInBev's global accelerator program for scaling
          sustainable startups. Since its inception in 2019, it has helped
          companies reduce 1,000 tons of glass waste in Brazil, introduce
          returnable packaging in the United States, recycled electric vehicle
          batteries in China, and more.
        </p>

        <p>
          Over 4 weeks, I designed and built a website for a global accelerator
          program, integrating a content management system, and social media
          feed. The site has hundreds of monthly visitors, who can apply to the
          program on an accessible, mobile-friendly, and easy-to-navigate site.
        </p>
        <p>
          You can view the current iteration of the site{' '}
          <a
            href="https://100accelerator.com/"
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
          .
        </p>

        <ImageWrapper
          src={imgHomeScreenshot}
          caption="A screenshot of the 100+ Accelerator home page, circa 2019."
        />

        <TextWrapper>
          <h4>Background</h4>

          <p>
            The 100+ Accelerator is an accelerator program launched by AB InBev
            in the Fall of 2018. The program is targeted towards startups that
            are addressing global sustainability issues and was launched in
            partnership with Highline Beta. The initial website was rushed into
            production, right before registration opened for the first cohort,
            which unfortunately resulted in a site that lacked quality in terms
            of accessibility, transparency of information, and the ability to
            scale. I sought to make the site more engaging, accessible and
            world-class through the means of a redesign.
          </p>

          <p>
            I worked with several accelerator directors and operations managers
            that had oversight into the program to rebuild the site. My task was
            to design and build a new website with CRM integration and SEO, in
            order to increase marketing reach and to drive conversion (cohort
            sign-ups). Given that I was the only designer/developer working on
            this project and my preference for lean and agile methodologies, I
            opted to use a feature-driven development process for this project.
          </p>
        </TextWrapper>

        <TwoColWrapper>
          <TextWrapper>
            <h4>Usability problems</h4>

            <p>
              There were a few issues that necessitated the need for this
              project:
            </p>
            <ol>
              <li>The site was not mobile-optimized.</li>
              <li>
                The site did not meet accessibility (WCAG Level A) requirements.
              </li>
              <li>
                The application process linked to an external page, that
                required you to send an email to an address.
              </li>
              <li>
                The site hierarchy hid several important links about the
                program, such as mentors, and news.
              </li>
              <li>
                There was no program timeline, nor mention of the cost (it was
                free).
              </li>
              <li>
                There was no way to subscribe to a mailing list to be alerted of
                updates.
              </li>
            </ol>
          </TextWrapper>
          <ImageWrapper
            src={imgMobileComparison}
            caption="A before (Aug 2018) and after (Jan 2019) screenshot of part of the landing page on mobile. The original implementation lacked color contrast, a nav-bar menu, and mobile optimization."
          />
        </TwoColWrapper>

        <TextWrapper>
          <h4>Requirements &amp; constraints</h4>

          <p>
            I collected data, conducted a competitive analysis of other
            accelerator programs, and created a comparison matrix of features
            and site-map structures. From this, I produced a list of
            requirements that would bring the site "up to par"—and surpass—other
            accelerator program sites. I then presented this to the directors to
            refine the details and the scope.
          </p>

          <p>
            The final feature requirements can be summarized in the following:
          </p>
          <ul>
            <li>Make the site mobile responsive.</li>
            <li>Make the site WCAG Level AA accessible.</li>
            <li>
              Provide a clear call to action to sign up, if applications are
              open—if not, provide a message/timeline on when it will open, and
              offer the opportunity to sign up to a mailing list to be alerted
              of when applications are open.
            </li>
            <li>
              Provide a clear mission statement on what kind of applicants the
              program is looking for, and the requirements that must be met.
              This saves both the applicant and company time.
            </li>
            <li>
              Provide content in a clear information hierarchy, such that no
              information is hidden. By highlighting the content on a single
              page, and providing a single level nav-bar menu, information can
              be easily found and accessed.
            </li>
            <li>
              Include a content management system (CMS) integration, so any user
              can go and edit copy, without needing developer assistance. It
              should also be able to set the registration window times and where
              the landing-page CTA links to (wait-list or application form).
            </li>
            <li>
              Include a newsletter subscription form so people that may be
              interested, but are not yet ready to sign up, have an opportunity
              to join in at a later date.
            </li>
            <li>
              Include the company Instagram feed to showcase cohort progress and
              the program's impact. The social feed was being updated by a
              separate team, so this provided significant value with a limited
              amount of work.
            </li>
            <li>Add a blog section for extra news and media content.</li>
          </ul>

          <p>
            There were some constraints set at the start as well, some of which
            helped form the above requirements:
          </p>

          <ul>
            <li>
              I am the only designer/developer that will be working on the site.
            </li>
            <li>
              There is no copywriter, so I would have to update and add
              additional copy.
            </li>
            <li>
              There were no firm program timelines set in place, so the copy
              needed to be vague, but not too broad to deter interested users.
            </li>
          </ul>
        </TextWrapper>

        <ImageWrapper src={imgFormComparison}>
          A before (Aug 2018) and after (Jan 2019) screenshot of the{' '}
          <em>Request for Information</em> form, and the new <em>Wait-list</em>{' '}
          form, respectively.
        </ImageWrapper>
        <TextWrapper>
          <h4>Design &amp; challenges</h4>

          <p>
            I created the initial designs and sitemaps in Figma, utilizing the
            card metaphor for several components. While I experimented with
            several designs of varying colors and complexity, I ultimately ended
            up with something very similar to what you see in the final product.
          </p>

          <p>
            One design challenge that arose was in the layout of all the
            information presented: designs quickly became convoluted and
            confusing, which led me to use sections with larger spaces for
            dividers, more heavily investing in the Cards component, and
            introducing tags. The goal was to make the site colorful, but not
            overwhelming.
          </p>

          <p>
            Some development challenges that arose from the process was the
            integration of the CMS software with some legacy code, which
            resulted in a bug that took the site offline. In response, I
            introduced automated integration testing to ensure that bugs are all
            caught before deployment, and no feature regressions are going
            forward.
          </p>

          <h4>Development</h4>
          <p>
            I worked on the development of the site using HTML, CSS, and React,
            with a Contentful CMS integration. Netlify was used for deployment,
            and Figma was used as the design tool.
          </p>

          <h4>Results &amp; next steps</h4>
          <p>
            After the several sprint cycles of building and iterating, the site
            was completed and launched. Overall there were significant
            enhancements to the site, and all the feature requirements were met.
          </p>
          <p>
            Nevertheless, there were still improvements to be made in terms of
            SEO, page-size, and a few accessibility upgrades. The analytics data
            collected was of limited value because applications are were not set
            to reopen until the Fall of 2019. Once registration opened I would
            be able to compare cohort analysis trends to uncover further
            optimization opportunities, improve the site even more.
          </p>
        </TextWrapper>
      </Section>
    </WidthWrapper>
  </>
)
