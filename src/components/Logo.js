import React from "react"
import styled from "styled-components/macro"

import { Picture } from "./base"

import avifSrc from "../images/header.avif"
import webpSrc from "../images/header.webp"
import fallbackSrc from "../images/header.png"

const Logo = ({ color = "#f5f5f5", size = 121 }) => {
  return (
    <Wrapper>
      <Container>
        <Picture
          avif={avifSrc}
          webp={webpSrc}
          fallback={fallbackSrc}
          height={64}
        />
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 469.247 120.84"
        width="auto"
        height={size}
      >
        <g fill={color}>
          <path d="M13.941 33.962q-.459.255-.629-.051l-.036-.066q-.11-.197.105-.815a1.3 1.3 0 0 0-.053-1.1L6.383 19.402l-2.382 1.32a1.24 1.24 0 0 0-.568 1.116 12.87 12.87 0 0 0 .011 1.594q.055.77-.25.94l-.263.145q-.437.242-.65-.297l-1.037-2.798a.633.633 0 0 1 .31-.886L12.53 14.45a.663.663 0 0 1 .937.196l1.923 2.335a.456.456 0 0 1 .128.386.43.43 0 0 1-.233.301l-.262.145q-.24.134-.715-.103a5.59 5.59 0 0 1-.926-.588 3.411 3.411 0 0 0-1.013-.538 1.175 1.175 0 0 0-.978.041l-2.383 1.321 6.945 12.529a1.291 1.291 0 0 0 .915.62q.65.14.759.337l.037.067q.17.306-.312.573Zm18.955-12.936a1.6 1.6 0 0 0 .894.634 1.209 1.209 0 0 1 .705.395l.049.087q.17.306-.29.56l-3.214 1.782q-.46.255-.629-.051l-.048-.088q-.11-.196.083-.804a1.247 1.247 0 0 0-.096-1.075l-2.619-4.208q-2.092-3.414-4.235-2.226a2.362 2.362 0 0 0-1.243 1.676 3.359 3.359 0 0 0 .45 2.308l2.849 5.138a1.26 1.26 0 0 0 .914.593q.66.135.769.332l.036.066q.182.328-.299.594l-3.388 1.878q-.46.255-.641-.073l-.036-.066a.59.59 0 0 1 .006-.504 5.449 5.449 0 0 0 .201-.668 1 1 0 0 0-.12-.734l-6.437-11.61a1.1 1.1 0 0 0-.593-.529 3.115 3.115 0 0 0-.695-.171.507.507 0 0 1-.418-.212l-.036-.066q-.158-.284.117-.665l1.77-2.325q.53-.694.894-.038l3.747 6.812a4.035 4.035 0 0 1 2.25-3.161 4.463 4.463 0 0 1 3.472-.439 5.829 5.829 0 0 1 3.217 2.762Zm10.072-7.355a.458.458 0 0 1 .352-.424.374.374 0 0 1 .469.255 4.2 4.2 0 0 1-.144 2.938 5.176 5.176 0 0 1-2.513 2.736 5.641 5.641 0 0 1-4.554.524 6.348 6.348 0 0 1-3.707-3.205 5.989 5.989 0 0 1-.614-4.69 5.745 5.745 0 0 1 2.858-3.585 4.941 4.941 0 0 1 3.568-.706 3.391 3.391 0 0 1 2.303 1.653 1.722 1.722 0 0 1-.267 2.149l-4.212 4.879a4.345 4.345 0 0 0 2.228 1.08 3.6 3.6 0 0 0 2.319-.457 3.685 3.685 0 0 0 1.469-1.4 3.218 3.218 0 0 0 .445-1.747Zm-7.83-4.378a2.126 2.126 0 0 0-1.094 1.893 5.521 5.521 0 0 0 .818 2.919 8.152 8.152 0 0 0 .907 1.327l2.757-3.587a1.064 1.064 0 0 0 .06-1.233 3.223 3.223 0 0 0-1.505-1.296 2.024 2.024 0 0 0-1.942-.023Z" />
          <path d="M54.399 120.84q-18.688 0-31.3-14.336a49.184 49.184 0 0 1-12.604-33.536q0-19.712 11.776-32.576t30.852-12.864q15.1 0 26.112 7.232t11.004 17.216a9.754 9.754 0 0 1-2.88 7.3 10.6 10.6 0 0 1-7.744 2.816 12.582 12.582 0 0 1-7.808-2.632 22.448 22.448 0 0 1-5.7-6.336q-2.24-3.712-4.544-7.488a24.486 24.486 0 0 0-5.568-6.4 11.616 11.616 0 0 0-7.488-2.624q-6.4 0-10.944 6.016t-4.54 16.26q0 18.048 8.7 29.632t20.1 11.584a22.511 22.511 0 0 0 7.744-1.28 20.007 20.007 0 0 0 6.272-3.648 35.648 35.648 0 0 0 4.224-4.16q1.472-1.792 3.392-4.48a4.064 4.064 0 0 1 4.48-1.472q2.688.7 2.56 3.776a32.856 32.856 0 0 1-9.792 22.656q-9.28 9.344-26.304 9.344Zm103.04-15.232a12.95 12.95 0 0 0 1.472 4.928 5.671 5.671 0 0 0 2.176 2.368 8.772 8.772 0 0 1 1.984 1.28 2.425 2.425 0 0 1 .9 1.92q0 4.224-14.464 4.224-5.888 0-8.768-1.408a6.635 6.635 0 0 1-3.648-4.736q-4.868 6.656-16.26 6.656-10.752 0-17.472-4.992t-6.72-14.464q0-9.216 6.656-14.4t16.384-5.184a24.831 24.831 0 0 1 12.928 3.2v-.384q-1.284-12.672-2.884-17.156a6.107 6.107 0 0 0-6.208-4.48 5.461 5.461 0 0 0-4.736 2.688 19.279 19.279 0 0 0-2.62 5.892 14.638 14.638 0 0 1-3.136 5.888 7.686 7.686 0 0 1-6.144 2.688 9.154 9.154 0 0 1-6.464-2.3 7.806 7.806 0 0 1-2.5-6.016q0-7.424 7.424-11.2t18.184-3.78q12.8 0 21.184 6.976t9.92 18.88Zm-29.568 8.7a5.561 5.561 0 0 0 4.8-2.816 11.367 11.367 0 0 0 1.856-6.4l-.512-5.888q-1.28-10.624-7.936-10.624a5.653 5.653 0 0 0-4.736 2.368 10.246 10.246 0 0 0-1.792 6.336 29.161 29.161 0 0 0 2.24 12.1q2.24 4.928 6.08 4.928Zm65.024 6.532q-9.728 0-15.3-6.144t-5.564-17.536V66.824h-4.864a2.862 2.862 0 0 1-2.112-.832 2.862 2.862 0 0 1-.832-2.112v-2.82a2.6 2.6 0 0 1 2.944-2.944h2.432a15.285 15.285 0 0 0 10.112-3.52 16.354 16.354 0 0 0 5.5-9.408q.64-3.328 3.456-3.328h2.944q3.456 0 3.456 3.328V58.12h13.184a2.862 2.862 0 0 1 2.112.832 2.862 2.862 0 0 1 .832 2.112v2.816a2.862 2.862 0 0 1-.832 2.112 2.862 2.862 0 0 1-2.112.832h-13.18v30.72a7.3 7.3 0 0 0 1.664 5.056 5.287 5.287 0 0 0 4.1 1.856 9.385 9.385 0 0 0 8.448-4.736 3.287 3.287 0 0 1 2.048-1.344 2.453 2.453 0 0 1 1.984.448 2.131 2.131 0 0 1 .832 1.792 20.047 20.047 0 0 1-5.7 14.144q-5.696 6.08-15.552 6.08Zm28.8-1.28q-3.072 0-3.072-2.432v-.512q0-1.536 2.56-4.672a10 10 0 0 0 2.56-6.336V42.632a10 10 0 0 0-2.56-6.336q-2.56-3.136-2.56-4.672v-.512q0-2.432 2.944-2.432h60.156a4.107 4.107 0 0 1 3.008.96 5.8 5.8 0 0 1 1.344 3.136l3.072 16.128a3.156 3.156 0 0 1-.64 2.688 3.22 3.22 0 0 1-2.56 1.024h-.64a7.294 7.294 0 0 1-4.928-2.368 30.751 30.751 0 0 1-4.352-5.12 24.129 24.129 0 0 0-4.736-5.12 9.292 9.292 0 0 0-5.952-2.368h-12.284q-5.888 0-5.888 6.144V72.46h14.336a5.454 5.454 0 0 0 3.776-1.6 12.983 12.983 0 0 0 2.752-3.584 19.329 19.329 0 0 1 2.368-3.584 3.594 3.594 0 0 1 2.5-1.6h1.152q2.432 0 2.432 2.944v23.04q0 2.944-2.432 2.944h-1.152q-1.536 0-3.136-2.368a57.163 57.163 0 0 0-3.648-4.8 5.957 5.957 0 0 0-4.608-2.432h-14.34v24.192a9.42 9.42 0 0 0 2.88 6.336q2.88 3.136 2.88 4.672v.512q-.004 2.428-3.072 2.428Zm126.208-13.952a12.951 12.951 0 0 0 1.472 4.928 5.671 5.671 0 0 0 2.176 2.368 8.772 8.772 0 0 1 1.984 1.28 2.425 2.425 0 0 1 .9 1.92q0 4.224-14.464 4.224-5.888 0-8.768-1.408a6.635 6.635 0 0 1-3.648-4.736q-4.868 6.656-16.26 6.656-10.752 0-17.472-4.992t-6.72-14.464q0-9.216 6.656-14.4t16.384-5.184a24.832 24.832 0 0 1 12.928 3.2v-.384q-1.28-12.672-2.88-17.152a6.107 6.107 0 0 0-6.208-4.48 5.461 5.461 0 0 0-4.736 2.688 19.279 19.279 0 0 0-2.624 5.888 14.638 14.638 0 0 1-3.136 5.888 7.686 7.686 0 0 1-6.144 2.688 9.154 9.154 0 0 1-6.464-2.3 7.806 7.806 0 0 1-2.5-6.016q0-7.424 7.424-11.2t18.18-3.78q12.8 0 21.184 6.976t9.92 18.88Zm-29.568 8.7a5.561 5.561 0 0 0 4.8-2.816 11.367 11.367 0 0 0 1.856-6.4l-.512-5.888q-1.28-10.624-7.936-10.624a5.653 5.653 0 0 0-4.736 2.368 10.246 10.246 0 0 0-1.792 6.336 29.162 29.162 0 0 0 2.24 12.1q2.24 4.928 6.08 4.928Zm70.528 6.532q-14.592 0-23.936-9.536a31.192 31.192 0 0 1-9.344-22.592q0-14.464 9.472-23.1a33.452 33.452 0 0 1 23.04-8.768q11.392-.128 19.328 5.184t7.936 13.76a7.2 7.2 0 0 1-2.236 5.372q-2.24 2.176-7.1 2.048a11.082 11.082 0 0 1-7.488-3.456 20.027 20.027 0 0 1-4.544-6.912 24.34 24.34 0 0 0-3.84-6.72 7.015 7.015 0 0 0-5.5-3.008q-3.968.128-6.464 4.224a19.105 19.105 0 0 0-2.5 10.112q0 12.544 5.7 20.1a18.057 18.057 0 0 0 15.168 7.552q8.576 0 14.208-7.424a2.855 2.855 0 0 1 3.072-1.088 2.272 2.272 0 0 1 1.792 2.5 20.905 20.905 0 0 1-7.3 15.36q-7.048 6.392-19.464 6.392Zm59.136 0q-9.728 0-15.3-6.144t-5.564-17.536V66.824h-4.864a2.862 2.862 0 0 1-2.112-.832 2.862 2.862 0 0 1-.832-2.112v-2.82a2.6 2.6 0 0 1 2.944-2.944h2.432a15.285 15.285 0 0 0 10.112-3.52 16.354 16.354 0 0 0 5.5-9.408q.64-3.328 3.456-3.328h2.952q3.456 0 3.456 3.328V58.12h13.184a2.862 2.862 0 0 1 2.112.832 2.862 2.862 0 0 1 .832 2.112v2.816a2.862 2.862 0 0 1-.832 2.112 2.862 2.862 0 0 1-2.112.832h-13.188v30.72a7.3 7.3 0 0 0 1.664 5.056 5.287 5.287 0 0 0 4.1 1.856 9.385 9.385 0 0 0 8.448-4.736 3.287 3.287 0 0 1 2.048-1.344 2.453 2.453 0 0 1 1.984.448 2.131 2.131 0 0 1 .832 1.792 20.047 20.047 0 0 1-5.7 14.144q-5.696 6.08-15.552 6.08Z" />
        </g>
      </svg>
    </Wrapper>
  )
}

export default React.memo(Logo)

const Wrapper = styled.div`
  display: inline-grid;
  padding-top: 30px;
  margin: 0 auto;
`

const Container = styled.div`
  position: absolute;
  left: 54%;
  top: 0;
  transform: translateX(-50%);
`
