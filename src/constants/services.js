const { default: SocialMedia } = require("@/components/social_media/social_media");
const { default: CustomButton } = require("@/components/ui/custom_button/custom_button");
const { default: Link } = require("next/link");
const { Image } = require("react-bootstrap");
const { StarFill } = require("react-bootstrap-icons");

const riderServices = [
    {
      id: "rs1",
      head: "Unlimited Rides, One Monthly Fee",
      img: "subs",
      noMargin:true,
      text: (
        <>
          <p>
            At Raido, we revolutionize the way you experience bike taxi and auto
            rides with our unique, driver-centric approach. We understand the
            challenges faced by drivers and aim to provide a platform that truly
            supports their growth and success. Here’s how we empower our Rider
            Stars.
          </p>
          <br />
          <h4>Why Choose Raido?</h4>
          <ul>
            <li>
              <span>
                <h5>Driver-Centric Approach: </h5>Your earnings are our
                priority.
              </span>
            </li>
            <li>
              <span>
                <h5>Transparency: </h5>No hidden charges, no surprises.
              </span>
            </li>
            <li>
              <span>
                <h5>Supportive Community: </h5>Be part of a network that values
                and supports its drivers.
              </span>
            </li>
          </ul>

          <p>
            Ready to ride with Raido? Download our app now and start your
            journey as a Rider Star!
          </p>
        </>
      ),
      cta: (
        <Link href="/">
          <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
        </Link>
      ),
    },
    {
      id: "rs2",
      head: "0% Commission on Rides",
      img: "comm",
      // noMargin: true,
      text: "We believe in fair earnings for all our Rider Stars. That’s why Raido charges absolutely zero commission on rides. Every penny you earn from your rides is yours to keep. By eliminating commission fees, we ensure that your hard work pays off directly.",
      cta: <CustomButton>Contact Us Now</CustomButton>,
    },
    {
      id: "rs3",
      head: "Earn What You Drive",
      img: "earn",
      text: "With Raido, there are no hidden charges eating into your profits. Our transparent model guarantees that what you drive is what you earn. You won’t be surprised by unexpected deductions, allowing you to manage your finances with confidence.",
      cta: <SocialMedia variant={2} />,
    },
    {
      id: "rs4",
      head: "Simple Subscription Model",
      img: "auto1",
      noMargin:true,
      text: "Starting your journey with Raido is easy and straightforward. Instead of paying recurring commissions or dealing with complex fee structures, you simply subscribe to our application. Pay a fixed amount when you start your first ride and enjoy unlimited earning potential. Our subscription model is designed to provide maximum benefit with minimal hassle.",
      cta: (
        <CustomButton>
          <p>Rate us</p>
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
        </CustomButton>
      ),
    },
  ];

  const cabServices = [];

  const schoolServices = [
    {
      id: "sc1",
      head: "Safe, Efficient, and Reliable School Rides",
      img: "school1",
      noMargin:true,

      text: (
        <>
          <p>
            Welcome to Raido School, the ultimate solution for managing school
            rides. Our service ensures the safety and convenience of students
            during their daily commute, offering real-time tracking,
            notifications, and a user-friendly interface for parents, schools,
            and drivers. Join our subscription model to enjoy seamless school
            transportation with peace of mind.
          </p>
          <br />
          <h4>We Believe In</h4>
          <ul>
            <li>
              <span>
                <h5>Safety First: </h5>Ensure your child&apos;s safety with
                real-time tracking and instant notifications.
              </span>
            </li>
            <li>
              <span>
                <h5>Peace of Mind: </h5>Stay informed about your child&apos;s
                commute from start to finish.
              </span>
            </li>
            <li>
              <span>
                <h5>Convenience: </h5>Easy-to-use app for both parents and
                drivers.
              </span>
            </li>
            <li>
              <span>
                <h5>Reliability: </h5>Accurate and timely updates for every
                ride.
              </span>
            </li>
            <li>
              <span>
                <h5>Flexibility: </h5>Subscription plans to suit your needs.
              </span>
            </li>
          </ul>
        </>
      ),
      cta: (
        <Link href="/">
          <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
        </Link>
      ),
    },
    {
      id: "sc2",
      head: " Student Boarding Status & Tracking",
      img: "school2",
      noMargin:true,

      text: "Track each student’s boarding status with ease. Our drivers use a slide button to confirm when a student boards the vehicle and when they reach their destination which tracks each and every actions when the children are with us. Parents can monitor the ride in real-time via GPS and can view the exact location of the school vehicle on a map at any time.",
      cta: (
        <Link href="/">
          <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
        </Link>
      ),
    },
    {
      id: "sc3",
      head: "GPS Monitoring and Push Notifications",
      img: "school3",
      noMargin:true,

      text: "Integrated GPS tracking allows parents to view the school vehicle's route which allow them to stay informed of any delays or changes in the route. Parents receive push notifications when their child is on-boarded and get alerts when the student reaches the school and when they are picked up for the return trip. Parents will get notified if a student leaves the vehicle unexpectedly. which ensure your child's safety and whereabouts at all times.",
      cta: (
        <Link href="/">
          <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
        </Link>
      ),
    },
    {
      id: "sc4",
      head: "Subscription Model",
      img: "school4",
      noMargin:true,
      text: (
        <>
          <p>
            Enjoy Raido School&apos;s service through a convenient subscription
            model by choosing a plan that fits your needs and ensure continuous
            service for your child&apos;s school commute.
          </p>
          <br />
          <h4>Easy Steps to Safe School Rides</h4>
          <ul>
            <li>
              <span>Download our app on your smartphone.</span>
            </li>
            <li>
              <span>
                Set up your account and add your child&apos;s details.
              </span>
            </li>
            <li>
              <span>Choose a subscription plan that fits your needs.</span>
            </li>
            <li>
              <span>
                Ensure your child&apos;s safety with real-time tracking and
                instant notifications.
              </span>
            </li>
            <li>
              <span>
                Stay informed about your child&apos;s commute from start to
                finish.
              </span>
            </li>
          </ul>
        </>
      ),
      cta: (
        <Link href="/">
          <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
        </Link>
      ),
    },
  ];

  const TABS = [
    {
      id: "t1",
      name: "Cabs and Auto",
      services: cabServices,
      caption:
        "",
    },
    {
      id: "t2",
      name: "Raido School",
      services: schoolServices,
      caption: "",
    },
    {
      id: "t3",
      name: "For Rider Starts",
      services: riderServices,
      caption:
        "Starting your journey with Raido is easy and straightforward. Instead of paying recurring commissions or dealing with complex fee structures, you simply subscribe to our application. Pay a fixed amount when you start your first ride and enjoy unlimited earning potential. Our subscription model is designed to provide maximum benefit with minimal hassle.",
    },
  ];

  export default TABS