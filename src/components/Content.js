const React = require('react');

const StyleConstants = require('../constants/Style');

const Content = React.createClass({
  propTypes: {
    selectedContent: React.PropTypes.string.isRequired
  },

  _getProgramContent () {
    const styles = this.styles();

    return (
      <div>
        <div style={styles.title}>
          Program
        </div>
        <div>
          <p style={styles.textWrapper}>
            I earned my Personal Trainer Certification through <a href='http://www.nasm.org' style={styles.link}>NASM
            (National Academy of Sports Medicine)</a> and I will strictly adhere to the
            principles and methods of training that I learned while studying their
            courses. These methods of training will allow me to train virtually anyone
            regardless of age, sex , current physical abilities and personal fitness
            goals. By following the <a href='http://www.nasm.org/landing-pages/opt' style={styles.link}>OPT model</a> (a systematic, progressive training program)
            that was designed by <a href='http://www.nasm.org' style={styles.link}>NASM</a>, I will take my clients through a series of
            training phases to help them meet their predetermined fitness goals. Types
            of training will include:  flexibility, balance, core, resistance,
            cardiorespiratory, and in some cases plyometric.  Modes of training will
            include: free weights, cable machines, body weight exercises, various cardio
            machines (treadmills, stairclimbers, elipticals, bikes) and resistance bands.
            The use of these different modes will vary from one person to the next based
            on the individual’s fitness goals.
          </p>
          <p style={styles.textWrapper}>
            A big part of seeing results from this program also includes the possible
            need to make modifications to an individual’s diet and or eating habits.
            Because I am not a Registered Dietician I am not able to design meal plans
            for my clients, however; I can and will be able to make useful recommendations
            regarding proper eating habits and how making small positive changes to a
            person’s diet can help them meet their fitness goals.
          </p>
          <p style={styles.textWrapper}>
            I will encourage all of my clients to train with me for as much time as
            possible in order to achieve the best possible results, however; I do offer
            the opportunity to train for shorter durations of time.  Just remember that
            the desired results won’t come in a short period of time!  It will most
            definitely take time and effort to build the new you.
          </p>
        </div>
      </div>
    );
  },

  _getLocationsContent () {
    const styles = this.styles();

    return (
      <div>
        <div style={styles.title}>
          Locations
        </div>
        <div>
          <p style={styles.textWrapper}>
            Locations!
          </p>
        </div>
      </div>
    );
  },

  _getAboutMeContent () {
    const styles = this.styles();

    return (
      <div>
        <div style={styles.title}>
          About Me
        </div>
        <div>
          <img src='./src/assets/images/larry-dugger.png' style={styles.image} />
          <p style={styles.textWrapper}>
            Hello, My name is Larry Dugger, Welcome to FIT 365 Personal Training.
          </p>
          <p style={styles.textWrapper}>
            I am a lifelong resident of San Juan County and I have spent the last 25 years as a
            businessman in the Farmington area. I have spent all of those 25 years working in the
            Sporting Goods Retail business, with the last 10 of those years serving in the capacity
            of Co-Owner of Xpert Archery in Farmington. These 2-plus decades in the retail industry
            have helped me develop the ability to provide exceptional customer service while
            working with all of my customers.
          </p>
          <p style={styles.textWrapper}>
            For most of my life I have considered myself to be fairly active and healthy.  In my
            youth I really enjoyed participating in team and individual sports activities and even
            felt like I excelled in many of those sports that I participated in. (Track and Field was
            my favorite) However like many people, as I became older and life became busier, I
            found that it was increasingly difficult to find the motivation and time to fit physical
            activities in to my life. Combining poor eating habits (bad diet) and little to no
            physical exercise over many years, resulted in a very unhealthy me.  I began feeling the
            negative results of this unhealthy lifestyle, and when I stepped onto a scale, what I was
            seeing in the mirror was confirmed. I was no longer the person that I wanted to be!
          </p>
          <p style={styles.textWrapper}>
            In the summer of 2007 I decided that I needed to make a change for the better and I decided
            to hire a Personal Trainer to help me re-kindle the passion that I once had for physical
            activity and exercise. It was time to take my personal health and fitness back!!! With
            persistence, hard work , dedication ,and the assistance of my trainer, I slowly began to see
            the positive results of that newly regained lifestyle.
          </p>
          <p style={styles.textWrapper}>
            Over the last 9 years I have continued to remain physically active, spending many hours in the
            gym to make sure that I didn’t allow myself to revert back to the unhealthy version of me.
            Through the course of these years I have found that I have developed the desire to help others
            to better themselves physically as well, which led me to the decision to become a Certified
            Personal Trainer. Making this career change at this point in my life has been a scary step for
            me to take, but I have to say that I am truly excited to begin this new endeavor. I know that
            the education and knowledge that I have gained as I studied the Personal Trainer courses that
            are taught by <a href='http://www.nasm.org' style={styles.link}>NASM (National Academy of Sports Medicine)</a> will give me the necessary tools to
            become very successful in this field of work.
          </p>
          <p style={styles.textWrapper}>
            I am super excited to work with each and every client that chooses me for their Personal
            Trainer and I truly look forward to helping each and every client make the positive
            changes in their lifestyles that will help them lead healthier lives. I promise that it
            feels great to be in good physical shape, and I promise to do all that I can to get you there!!
          </p>
          <p style={styles.textWrapper}>
            Let’s Do It!!!
          </p>
        </div>
      </div>
    );
  },

  _getContactContent () {
    const styles = this.styles();

    return (
      <div>
        <div style={styles.title}>
          Contact
        </div>
        <div>
          <div style={styles.contactBlock}>
            <span style={styles.contactType}>Phone:</span>
            <span>(505) 860-7730</span>
          </div>
          <div style={styles.contactBlock}>
            <span style={styles.contactType}>Email:</span>
            <span>fit365pt@gmail.com</span>
          </div>
          <div style={styles.contactBlock}>
            <span style={styles.contactType}>Facebook:</span>
            <span><a href='https://www.facebook.com/FIT365PersonalTraining/'>https://www.facebook.com/FIT365PersonalTraining/</a></span>
          </div>
        </div>
      </div>
    );
  },

  _renderSelectedContent () {
    switch (this.props.selectedContent) {
      case 'program':
        return this._getProgramContent();
      case 'locations':
        return this._getLocationsContent();
      case 'about':
        return this._getAboutMeContent();
      case 'contact':
        return this._getContactContent();
      default:
        return null;
    }
  },

  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <div style={styles.contentWrapper}>
          {this._renderSelectedContent()}
          <div style={styles.footer} />
        </div>
      </div>
    );
  },

  styles () {
    return {
      component: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      },
      contactBlock: {
        fontSize: StyleConstants.FontSizes.XXLARGE,
        paddingBottom: 20
      },
      contactType: {
        color: StyleConstants.Colors.PRIMARY,
        fontFamily: StyleConstants.Fonts.SEMIBOLD,
        marginRight: 10
      },
      contentWrapper: {
        width: 700,
        paddingBottom: 100
      },
      footer: {
        borderTop: '1px solid ' + StyleConstants.Colors.CHARCOAL,
        marginTop: 20,
        width: '100%'
      },
      image: {
        border: '2px solid ' + StyleConstants.Colors.PRIMARY,
        borderRadius: 3,
        float: 'left',
        height: 200,
        marginRight: 10,
        width: 200
      },
      link: {
        whiteSpace: 'nowrap'
      },
      textWrapper: {
        color: StyleConstants.Colors.CHARCOAL,
        fontFamily: StyleConstants.Fonts.SEMIBOLD,
        fontSize: StyleConstants.FontSizes.LARGE,
        lineHeight: '25px',
        paddingBottom: 20,

      },
      title: {
        borderBottom: '1px solid ' + StyleConstants.Colors.CHARCOAL,
        color: StyleConstants.Colors.CHARCOAL,
        fontFamily: StyleConstants.Fonts.SEMIBOLD,
        fontSize: StyleConstants.FontSizes.JUMBO,
        marginBottom: 20,
        paddingBottom: 10
      }
    };
  }
});

module.exports = Content;