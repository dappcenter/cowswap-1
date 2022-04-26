import styled from 'styled-components/macro'
import { animated } from 'react-spring'
import { AlertTriangle, CheckCircle, Clock } from 'react-feather'
import CowProtocolLogo from 'assets/cow-swap/cowprotocol.svg'

export const ProgressBarWrapper = animated(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 575px;
  margin: 16px 0 8px 0;
  overflow: hidden;
  display: flex;
  flex-flow: column wrap;
  border-radius: 12px;
  padding: 20px 20px 4px;
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg4};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 24px auto 12px;
    width: 100%;
    max-width: 100%;
    grid-column: 1 / -1;
  `};
`)

export const ProgressBarInnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.blue4};
  border-radius: 18px;
  overflow: visible !important;
  position: relative;
`

export const ProgressBarIndicator = styled.div<{ percentage: number }>`
  height: 18px;
  background: rgb(233, 214, 37);
  transform: translateX(0%);
  border-radius: 12px;
  transition: all 0.5s;
  width: ${({ percentage }) => percentage}%;
`

export const CowProtocolIcon = styled.div`
  position: absolute;
  top: -4px;
  right: 0px;
  height: 24px;
  width: 24px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.bg4};
  background: url(${CowProtocolLogo}) ${({ theme }) => theme.black} no-repeat center/75%;
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.bg1};
`

export const WarningLogo = styled.div`
  position: absolute;
  top: -4px;
  right: 0px;
  height: 24px;
  width: 24px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.bg1};
  :after {
    content: '!';
    color: ${({ theme }) => theme.red1};
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    margin: 2px 0;
  }
`

export const WarningProgress = styled(ProgressBarIndicator)`
  background: linear-gradient(270deg, #de3f3f 2.17%, #ff784a 106.52%); ;
`

export const SuccessProgress = styled(ProgressBarIndicator)`
  background: linear-gradient(270deg, #27ae5f 16.85%, #b6a82d 106.52%);
`

export const PendingProgress = styled(ProgressBarIndicator)`
  background: linear-gradient(270deg, #b6a82d 16.85%, #ff784a 106.52%);
`

export const GreenClockIcon = styled(Clock)`
  margin: 0 0.5rem 0 0;
  color: ${({ theme }) => theme.success};
`

export const GreenCheckIcon = styled(CheckCircle)`
  margin: 0 0.5rem 0 0;
  color: ${({ theme }) => theme.success};
`

export const OrangeClockIcon = styled(Clock)`
  margin: 0 0.5rem 0 0;
  color: ${({ theme }) => theme.yellow1};
`

export const WarningIcon = styled(AlertTriangle)`
  margin: 0 0.5rem 0 0;
  color: ${({ theme }) => theme.attention};
`

export const StatusMsgContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    gap: 0.2rem;
    display: flex;
    align-items: center;
  
    svg {
      flex-shrink: 0;
    }
  `};
`

export const StatusMsg = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text1};
  margin: 0;
`
