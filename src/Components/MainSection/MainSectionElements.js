import styled from "styled-components";

export const HeroContainer = styled.div`
       background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    height: 840px;
    position: relative;
    z-index: 1;

    :before {
        content : '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index:2;
    }
`
export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
`

export const HeroName = styled.span`
    color: #f72585;
    font-size: 48px;
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px
    }

    @media screen and (max-width: 480px){
        font-size: 18px
    }
`

export const LinkP = styled.a`
    color: #f72585;
    font-size: 16px;
    margin-top: 40px  ;
    @media screen and (max-width: 768px){
        font-size: 16px
    }

    @media screen and (max-width: 480px){
        font-size: 10px
    }
`