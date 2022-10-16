import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.colors.mainBg};
        color: ${({ theme }) => theme.colors.screenTxt}
    }
    .switcher{
        background-color: ${({ theme }) => theme.colors.switcher};
    }
    .switcher-tgl{
        background-color: ${({ theme }) => theme.colors.switcherTgl}
    }
    .screen{
        background-color: ${({ theme }) => theme.colors.screenBg};
        color: ${({ theme }) => theme.colors.screenTxt}
    }
    .buttons{
        background-color: ${({ theme }) => theme.colors.toggleKeyBg};
    }
    .first-btn{
        background-color: ${({ theme }) => theme.colors.firstKeyBg};
        color: ${({ theme }) => theme.colors.firstToggleTxt};
        box-shadow: 0 4.5px ${({ theme }) => theme.colors.firstKeyShadow}
    }
    .sec-btn{
        background-color: ${({ theme }) => theme.colors.secKeyBg};
        color: ${({ theme }) => theme.colors.secToggleTxt};
        box-shadow: 0 4.5px ${({ theme }) => theme.colors.secKeyShadow}
    }
    .third-btn{
        background-color: ${({ theme }) => theme.colors.thirdKeyBg};
        color: ${({ theme }) => theme.colors.thirdToggleTxt};
        box-shadow: 0 4.5px ${({ theme }) => theme.colors.thirdKeyShadow}
    }
    `