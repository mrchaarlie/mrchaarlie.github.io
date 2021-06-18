import * as React from 'react'
import { Helmet } from 'react-helmet'
import ScrollToTop from 'components/ScrollToTop'
import Header from 'components/Header'
import Section from 'components/Section'
import TwoColWrapper from 'components/TwoColWrapper'
import WidthWrapper from 'components/WidthWrapper'
import TextWrapper from 'components/TextWrapper'
import ImageWrapper from 'components/ImageWrapper'
import imgFemaleFunders from '../img/work/female-funders-hero.jpg'
import imgFFLighthouse from '../img/work/ff-lighthouse.png'
import imgFFProgression from '../img/work/ff-page-progression.jpg'
import imgFFProgressionHiRes from '../img/work/ff-page-progression.png'
import imgFFDesignProgression from '../img/work/ff-design-progression.png'
import imgFFSitemap from '../img/work/ff-sitemap.png'
import imgFFNewsletter from '../img/work/ff-newsletter.png'

export default () => (
  <>
    <ScrollToTop/>
    <Helmet>
      <title>Charles Wu | Female Funders </title>
    </Helmet>
    <Header showShadow={true} title={'Female Funders'} homeLink={true} />

    <WidthWrapper>
      <Section first={true}>
        <h2>Summary</h2>
        <p>
          Female Funders is an educational platform that empowers females to get
          into angel investing. After{' '}
          <a href="https://betakit.com/highline-beta-relaunches-female-funders-angel-investing-program-with-naco/">
            undergoing a relaunch
          </a>{' '}
          in the Spring of 2018, the program has rapidly evolved, changing
          education material, networking events, and marketing strategies.
        </p>

        <p>
          I redesigned and built a website for an educational platform,
          increasing SEO, accessibility, and conversion rates. This was a
          long-term project where I collaborated with other designers,
          directors, and marketers. I learned a lot about web strategy, site
          optimization, how to build scalable sites, and as well as many SEO
          methods. The resulting product had major performance and usability
          improvements, which generated new leads and increased conversions by
          an estimated 50%.
        </p>
        <p>
          You can view the current iteration of the site{' '}
          <a
            href="https://femalefunders.com/"
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
          .
        </p>

        <ImageWrapper
          src={imgFemaleFunders}
          caption="A screenshot of the Female Funders home page, circa 2019."
        />
        <ImageWrapper
          src={imgFFLighthouse}
          height="5rem"
          caption="The site's Lighthouse audit score is near perfect after the site was redesigned and deployed."
        />

        <TwoColWrapper>
          <TextWrapper>
            <h2>Background</h2>

            <p>
              As a result of the changing needs due to the relaunch, I worked
              closely with the program director to help shape and redesign the
              site, with the goal of improving the company brand and site
              performance.
            </p>

            <p>
              I conducted research on our target audience and discovered
              potential customers were abandoning the site because they were
              feeling inadequate. Something as abstract as a user's feelings was
              hard to quantify, but it was important to address; we wanted the
              site to be more warm and welcoming.
            </p>
          </TextWrapper>

          <ImageWrapper src={imgFFProgression} height="24rem">
            The progression of the website throughout the project. The first
            image on the left is from Nov 2018, with the last from May 2019.{' '}
            <a href={imgFFProgressionHiRes} target="_blank">
              View the higher resolution image here.
            </a>
          </ImageWrapper>
        </TwoColWrapper>

        <TextWrapper>
          <h2>Measuring success</h2>

          <ul>
            <li>
              <strong>Improve the site branding.</strong> The related
              quantifiable metrics were:
              <ul>
                <li>
                  Increase Time on Page by 50%. The existing average was less
                  than 30 seconds.
                </li>
                <li>
                  Decrease bounce rates by 50%. There was an overwhelming amount
                  of information, which made it difficult to understand what we
                  were offering, and what the next steps were.
                </li>
              </ul>
            </li>
            <li>
              <strong>Increase SEO ratings.</strong> The site lacked certain
              meta tags, settings, and social media integrations.
            </li>
            <li>
              <strong>Increase site speed.</strong> Image-heavy assets and
              non-optimized media assets slowed the site.
            </li>
            <li>
              <strong>Make the site accessible and mobile-responsive.</strong>{' '}
              While the site could work on mobile and met most WCAG 2.0 (A)
              requirements, there were still improvements to be made, especially
              with buttons and form design.
            </li>
            <li>
              <strong>Empower users to make informed decisions.</strong> One
              large page of text and data was intimidating and made it difficult
              to track user flow since there was only one page. By splitting the
              content, and offering multiple chances to Learn More, we could
              gather more metrics.
            </li>
          </ul>
        </TextWrapper>
      </Section>

      <Section>
        <h2>Designs</h2>
        <ImageWrapper src={imgFFDesignProgression}>
          Artboards showing part of the design process for redesigning the home
          page. I worked with another designer to "ping-pong" design iterations.{' '}
          <a href={imgFFDesignProgression} target="_blank">
            View the higher resolution image here.
          </a>
        </ImageWrapper>

        <TextWrapper>
          <h3>Visual Identity</h3>

          <p>
            The key theme centered around empowering women, and there was a lot
            of effort put into finding the right imagery to set the tone to help
            visitors resonate with the site before reading a single word. I
            explored various themes and moods but ended up deciding to go with
            imagery that featured our target demographic. I added color
            treatment and photo-editing to compliment the rest of the site's
            colors.
          </p>
          <p>
            The site's colors were also chosen with care: while the teal hue was
            associated with the original branding, it caused a few problems with
            accessibility due to how light it was. As a solution, the color
            value was adjusted slightly and subtle text-shadows were added to
            emphasize the contrast. We also wanted to de-emphasize the blue,
            since it's traditionally known for being cold, despite it being one
            of the most popular brand colors. The teal was feminine and helped
            set a more calming mood.
          </p>
        </TextWrapper>

        <TwoColWrapper>
          <TextWrapper>
            <h3>Site structure</h3>

            <p>
              The course, Angel Academy, was now the focus of the site, but the
              program's features were diluted by having competing information on
              the home page. I separated the content into sub-pages in order to
              have a more streamlined funnel of content. The initial goal was to
              get visitors to learn more about Angel Academy, not increase the
              raw number of sign-ups. This seems counter-intuitive at first
              since content became more difficult to access, but we actually
              found that we generated higher quality leads with a higher rate of
              application approval!
            </p>
            <p>
              On each page under the Angel Academy section, the content was
              straight to the point and was followed up with 2 CTA's:{' '}
              <em>Apply</em> or <em>Learn More.</em> This was designed as a
              nudge, a filter, and as a data collection point. Being able to see
              where drop-offs occurred allows us to correct and optimize the
              issues.
            </p>
          </TextWrapper>

          <ImageWrapper
            src={imgFFSitemap}
            caption="The new sitemap had more pages but a better distribution of content that made searching for content easier."
          />
        </TwoColWrapper>
        <TextWrapper>
          <h2>Form optimization</h2>
          <p>
            For newsletter sign-ups, having fewer form inputs directly
            correlates to a higher completion rate, so at one point, I reduced
            the field inputs to only the email in order to increase the
            subscription count. However, like the previous section, it was more
            important to generate quality leads. We were receiving interest from
            people internationally, but our program only ran in the Americas,
            and we want to focus on this geographic area first. I eventually
            split up the form to the inputs below. This is definitely not the
            ideal case for all forms, but in our specific situation, it works.
          </p>
        </TextWrapper>

        <ImageWrapper
          src={imgFFNewsletter}
          caption="The old Female Funders newsletter subscription form had—gasp—5 input fields."
        />

        <TextWrapper>
          <h2>Development</h2>
          <p>
            I built most of the site by myself on React, with Contentful as a
            CMS tool for the copy and blog updates, combined with Netlify for
            deployment, and Zapier for workflow automation.
          </p>
          <p>
            I also used Cypress for integration testing, which was especially
            useful for testing the Angel Academy
            <em>Learn More</em> funnel, and regression testing.
          </p>
        </TextWrapper>

        <TextWrapper>
          <h2>Results &amp; next steps</h2>
          <p>
            Overall the designs underwent several iterations since we follow a
            lean and agile methodology at Highline Beta, but each iteration
            provided opportunities to learn and improve. By making well-informed
            hypotheses and adjusting based on the new data, the site update was
            a relative success.
          </p>
          <p>
            Compared with the previous website design, the user's{' '}
            <em>Time on Page</em> went up by 80%, and the <em>Bounce Rate</em>{' '}
            decreased by 30%. Several other factors impact this data, such as
            traffic sources and press-releases, but it is a good start towards
            building better a website in a niche industry.
          </p>
        </TextWrapper>

        <TextWrapper></TextWrapper>
      </Section>
    </WidthWrapper>
  </>
)
