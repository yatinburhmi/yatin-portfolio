import React from 'react'
import Typist from 'react-typist'
import Video from '../../assets/video-bg/video.mp4'
import { HeroContainer, HeroBackground, VideoBg, HeroContent, HeroH1, HeroName, HeroP, LinkP} from './MainSectionElements'

export const MainSection = () => {
    return (
        <>
            <HeroContainer id="home">
                <HeroBackground>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
                </HeroBackground>
                <HeroContent>
                    <HeroH1>
                        Hello, I'm <HeroName>Yatin Burhmi.</HeroName>
                    </HeroH1>
                    <HeroP>
                        <Typist>
                        <Typist.Delay ms={1500} />
                            I am a full-stack developer.
                        </Typist>
                        <LinkP href='https://pdfhost.io/v/wtroFHqlH_Yatin_Burhmi_2022'  target="_blank">
                            
                            View resume
                            
                            </LinkP>
                    </HeroP>
                    
                </HeroContent>
            </HeroContainer>
        </>
    )
}
