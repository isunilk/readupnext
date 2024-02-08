import Script from 'next/script'
 
export default function SeoScript() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J27WXJ8XWZ"/>
      <Script> 
       {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
         gtag("js", new Date());
         gtag('config', 'G-J27WXJ8XWZ')`}
        </Script>
    </>
  )
}