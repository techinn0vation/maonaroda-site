import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const WrapperFooter = styled.footer`
  width: 100%;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${props => props.theme.colors.colorF};

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    gap: 2rem;
  }
`
export const ContentFooter = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: row;
  }
`
export const BlockFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorB};
  }
`
export const RowBlock = styled.div`
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorA};
  }
`
export const LinkField = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorB};
  }
`
export const IconsFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const LinkIcon = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.colorA};
  font-size: 2.3rem;
  outline: solid ${props => props.theme.colors.colorA} 0.2rem;
  border-radius: 100%;
  padding: 0.5rem;

  transition: ease-in 0.09s;
  &:focus:active {
    transform: translateY(0.2rem);
  }
`
export const SubDescriptionFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const LinkCellFooter = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.colorB};
    text-transform: lowercase;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`
export const DownloadQrCode = styled(Image)`
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  object-fit: contain;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    max-width: 25%;
    height: auto;
    margin: 0 auto;
  }
`
export const CellSubFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`
export const ContentTextCompany = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${props => props.theme.colors.colorA};
  }
`
