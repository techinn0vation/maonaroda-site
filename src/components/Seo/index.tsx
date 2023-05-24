import React from 'react'
import Head from 'next/head'

interface PropSeo {
  title: string;
  description: string;
  keywords: string;
}

export default function SettingsSeo({ title, description, keywords }: PropSeo) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  )
}
