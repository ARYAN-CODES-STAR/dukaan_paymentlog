import React from 'react'

export default function Navbar1() {
  return (
    <div className="w-[224px] h-[1482px] pl-[10px] pt-[16px] pr-[10px] pb-[16px] gap-[16px] items-stretch bg-slate-800 flex flex-col">
      <div className="w-[208px] h-[1,380px] flex gap-[24px] pr-4 items-start">
        <div className="rounded bg-white flex aspect-square items-center w-10 h-10 px-px">
          <img
            loading=""
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&"
            className="h-[39px] w-[39px] rounded-[4px] aspect-square object-contain"
          />
        </div>
        <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
          <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
            Nishyan
          </div>
          <div className="text-white text-sm leading-4 underline whitespace-nowrap mt-1">
            Visit store
          </div>
        </span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5f608b6ce9730cea85c11c8d232d87963ed700103a61e54af2a14cec35feae?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
      </div>
      
      <span className="items-stretch rounded flex justify-between gap-3 mt-6 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a16058d87263090bf348b136fed770490b8e69bee26a353f9b79fbb0b3e320f4?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-[20px] h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Home
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96eb989a027521b0715802bb31b2b72fa88b7052dfe8366115623bf45a1f82e?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Orders
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4411e2d11f0c0157d0f578c981698e2964b376729bfaac00a7d61610735d3572?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Products
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91a306af2801e21fe7839766f82de4199ddc729998446cd14af09326c107750?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Delivery
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7bcc2abd1f7595ad2e0a035c5443941fae311f0b7f0675e4ced94a89333e4a?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Marketing
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdedc0841595fb84350b82dc6b6fa7b48674cd5a3dcd4d9b2ae023bb22ccd6f2?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Analytics
        </div>
      </span>
      <span className="items-stretch rounded bg-white bg-opacity-10 flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9035aaec1fc4191caabb99a0e91088cfc015ee5d8d63020b3587676244e47ab2?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Payments
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/261f5b222d46bb3f9eb26f089223c47b2669bef28b65982bff57937ea6a42709?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Tools
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce79014c915928c7b64d2856f9eba8e99a59b4ccee5cb59076995c8d4428342?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Discounts
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9656b8a1dcd1084d7e5eaf4cf72397ce0a3a173b6760cd6fded2491fc35f91db?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Audience
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d370f59af7b3b25750e13335836384fc3597f4e0b0d80fbf38e137d7d1bf9f?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Appearance
        </div>
      </span>
      <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb87a662bc23be225b4672f79bade128268c4abaf3d73d60c4c7c94de05a7d6c?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full h-[20px]"
        />
        <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
          Plugins
        </div>
      </span>
      <div className="items-stretch rounded bg-slate-700 flex w-full flex-col justify-center mt-[854px] pl-3.5 pr-9 py-1.5">
        <div className="items-center flex justify-between gap-3">
          <div className="items-center rounded bg-white bg-opacity-10 flex aspect-[1.0833333333333333] flex-col justify-center my-auto px-2 py-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c18bfcf8360a4061c32b9df570f220cd12e7f4f6d0b178024b822aa2f5a3c896?apiKey=d6479c9759d24260a152efdb16e597f6&"
              className="aspect-square object-contain object-center w-6 overflow-hidden h-[20px]"
            />
          </div>
          <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
            <div className="items-center flex justify-between gap-3">
              Available credits
            </div>
            <div className="text-white text-base font-medium leading-6">
              222.10
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}
