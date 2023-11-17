import React from 'react'
import './Share.css';
import {
    FacebookShareButton,
    LinkedinShareButton,
    OKShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookShareCount,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
    InstapaperShareButton,
    InstapaperIcon,
    EmailShareButton,
    EmailIcon
  } from "react-share";
function Share({projectLink}) {
  return (
    <div className='share-container'>
        <FacebookShareButton
            url={projectLink}
            quote={'Check out this Website by Emmanuel Mzota'}
            hashtag="#Software Developer"
            >
            <FacebookIcon size={32} round />
        </FacebookShareButton>

        <WhatsappShareButton
            url={projectLink}
            quote={'Check out this Website by Emmanuel Mzota'}
            hashtag="#Software Developer"
            >
            <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <EmailShareButton
            subject='Website'

            url={projectLink}
            body={'Check out this Website by Emmanuel Mzota'}
            hashtag="#Software Developer"
            >
            <EmailIcon size={32} round />
        </EmailShareButton>

        <LinkedinShareButton
            url={projectLink}
            quote={'Check out this Website by Emmanuel Mzota'}
            hashtag="#Software Developer"
            >
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <TwitterShareButton
            url={projectLink}
            quote={'Check out this Website by Emmanuel Mzota'}
            hashtag="#Software Developer"
            >
            <TwitterIcon size={32} round />
        </TwitterShareButton>
  </div>
  )
}

export default Share