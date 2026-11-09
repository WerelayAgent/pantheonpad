import{o as e}from"./rolldown-runtime-DLMaRju-.js";import{n as t,t as n}from"./jsx-runtime-CvftCknt.js";import{c as r,s as i}from"./Loader-UAZqxsnw-BjnvLK0W.js";import{Vn as a}from"./call-_cjxdR9c.js";import{C as o,N as s,O as c,i as l}from"./prepareFundingModalData-BnnZJKUp-B9x8I8FJ.js";import{a as u,et as d,g as f}from"./privy-context-C9y77F5F-DTJlbLer.js";import{t as p}from"./react-DycEGQDA.js";var m=e(t(),1),h=n(),g=e=>{let[t,n]=(0,m.useState)(`auto`);return(0,m.useEffect)((()=>{let t=new ResizeObserver((e=>{n(e[0]?.contentRect.height??`auto`)}));return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[e.current]),t},_=r.div`
  text-align: left;
  flex-grow: 1;
`,v=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`,y=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`,b=r(y)`
  ${e=>e.$colorScheme===`light`?`background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;`:e.$colorScheme===`dark`?`background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;`:void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 3px;
`,x=i`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    min-height: 56px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;
    color: var(--privy-color-foreground);

    padding: 10px 12px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-md);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }
  }
`,S=r.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,C=r.button.attrs({className:`login-method-button`})`
  ${x}
`;r.a`
  ${x}
`;var w=r.div`
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.$fullSize?`0`:`4px`};
  background: ${e=>e.$fullSize?`transparent`:`var(--privy-color-background-2)`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: ${e=>e.$fullSize?`32px`:`18px`};
    height: ${e=>e.$fullSize?`32px`:`18px`};
    color: ${e=>e.$fullSize?`inherit`:`var(--privy-color-icon-muted)`};
  }
`,T=r.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  ${e=>e.$if?`display: none;`:``}
`,E=r.div`
  width: 100%;
  height: 100%;
  padding: ${e=>e.$withPadding?`64px 0px`:`0px`};
`,D=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 12px;
  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;async function O(e,t,n){if(!t.shouldEnforceDefaultChainOnConnect)return;let r=Number(e.chainId.replace(`eip155:`,``));if(!t.chains.find((e=>e.id===r))&&(e.connectorType!==`wallet_connect_v2`||e.walletClientType!==`metamask`)){n?.();try{await e.switchChain(t.defaultChain.id),e.chainId=l(a(t.defaultChain.id))}catch{s.warn(`Unable to switch to default chain after connect`,{chainId:t.defaultChain.id})}}}var k=(0,m.createContext)({}),A=({children:e})=>{let t=u(),[n,r]=(0,m.useState)({});return o(`login`,{onComplete:({loginAccount:e})=>{e&&e.type!==`passkey`&&e.type!==`cross_app`&&(e.type!==`wallet`||e.walletClientType!==`privy`)&&(c.put(j(t.id),e.type),e.type===`wallet`?(c.put(M(t.id),e.walletClientType),c.put(N(t.id),e.chainType),r({accountType:e.type,walletClientType:e.walletClientType,chainType:e.chainType})):(c.del(M(t.id)),c.del(N(t.id)),r({accountType:e.type})))}}),(0,m.useEffect)((()=>{if(!t.id)return;let e=c.get(j(t.id)),n=c.get(M(t.id)),i=c.get(N(t.id));e&&r(e===`wallet`?{accountType:e,walletClientType:n,chainType:i}:{accountType:e})}),[t.id]),(0,h.jsx)(k.Provider,{value:n,children:e})},j=e=>`privy:${e}:recent-login-method`,M=e=>`privy:${e}:recent-login-wallet-client`,N=e=>`privy:${e}:recent-login-chain-type`,P=()=>(0,m.useContext)(k),F=e=>{o(`fundWallet`,e);let{fundWallet:t}=d();return{fundWallet:({address:e,options:n})=>t(e,n)}};function I(e){let{logout:t}=(0,m.useContext)(f);return o(`logout`,e),{logout:t}}var L=p((()=>({isModalOpen:!1,resolvers:null})));p((()=>({})));var R=({address:e,client:t,appId:n})=>{let r=`${t}:${e}`;n&&c.put(z(n),r),L.setState({wallet:r})},z=e=>`privy:${e}:active-wallet-connection`;export{g as _,w as a,T as c,v as d,y as f,S as g,R as h,I as i,O as l,C as m,b as n,E as o,F as p,D as r,P as s,_ as t,A as u};