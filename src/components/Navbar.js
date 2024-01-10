import * as React from "react";

export default function Navbar(props) {
  return (
    <div className="bg-neutral-50 w-[1440px] h-[1482px]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
          <div className="items-stretch bg-slate-800 flex w-full grow flex-col mx-auto px-2 py-4">
            <div className="flex gap-1 pr-4 items-start">
              <div className="rounded bg-white flex aspect-square flex-col justify-center items-center w-10 h-10 px-px">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f63f8c4f1a78c1dcf12a84896339872eced0cf0486164aaaaf7913f50c5c8d?apiKey=d6479c9759d24260a152efdb16e597f6&"
                  className="aspect-square object-contain object-center w-full overflow-hidden"
                />
              </div>
              <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
                  Nishyan
                </div>
                <div className="text-white text-sm leading-4 underline whitespace-nowrap mt-1">
                  Visit store
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5f608b6ce9730cea85c11c8d232d87963ed700103a61e54af2a14cec35feae?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-6 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a16058d87263090bf348b136fed770490b8e69bee26a353f9b79fbb0b3e320f4?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Home
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96eb989a027521b0715802bb31b2b72fa88b7052dfe8366115623bf45a1f82e?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Orders
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4411e2d11f0c0157d0f578c981698e2964b376729bfaac00a7d61610735d3572?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Products
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91a306af2801e21fe7839766f82de4199ddc729998446cd14af09326c107750?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Delivery
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7bcc2abd1f7595ad2e0a035c5443941fae311f0b7f0675e4ced94a89333e4a?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Marketing
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdedc0841595fb84350b82dc6b6fa7b48674cd5a3dcd4d9b2ae023bb22ccd6f2?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Analytics
              </div>
            </div>
            <div className="items-stretch rounded bg-white bg-opacity-10 flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9035aaec1fc4191caabb99a0e91088cfc015ee5d8d63020b3587676244e47ab2?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Payments
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/261f5b222d46bb3f9eb26f089223c47b2669bef28b65982bff57937ea6a42709?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Tools
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce79014c915928c7b64d2856f9eba8e99a59b4ccee5cb59076995c8d4428342?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Discounts
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9656b8a1dcd1084d7e5eaf4cf72397ce0a3a173b6760cd6fded2491fc35f91db?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Audience
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d370f59af7b3b25750e13335836384fc3597f4e0b0d80fbf38e137d7d1bf9f?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Appearance
              </div>
            </div>
            <div className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb87a662bc23be225b4672f79bade128268c4abaf3d73d60c4c7c94de05a7d6c?apiKey=d6479c9759d24260a152efdb16e597f6&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="font-medium text-inter text-body2 text-opacity-80 text-xs leading-5 text-white grow whitespace-nowrap">
                Plugins
              </div>
            </div>
            <div className="items-stretch rounded bg-slate-700 flex w-full flex-col justify-center mt-[854px] pl-3.5 pr-9 py-1.5 max-md:mt-10 max-md:pr-5">
              <div className="items-center flex justify-between gap-3">
                <div className="items-center rounded bg-white bg-opacity-10 flex aspect-[1.0833333333333333] flex-col justify-center my-auto px-2 py-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c18bfcf8360a4061c32b9df570f220cd12e7f4f6d0b178024b822aa2f5a3c896?apiKey=d6479c9759d24260a152efdb16e597f6&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden"
                  />
                </div>
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-white text-sm leading-4 whitespace-nowrap">
                    Available credits
                  </div>
                  <div className="text-white text-base font-medium leading-6">
                    222.10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch px-5 max-md:max-w-full">
            <div className="items-stretch bg-white flex w-full justify-between gap-5 px-8 py-3 border-b-zinc-300 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="flex items-center justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex gap-4 my-auto">
                  <div className="text-zinc-900 text-base leading-6">
                    Payments
                  </div>
                  <div className="self-center flex gap-1.5 my-auto items-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5632affba16fab2769fd2d328be85166a1bd18808553ca7e3d8ce24cebe44105?apiKey=d6479c9759d24260a152efdb16e597f6&"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-600 text-xs leading-4">
                      How it works
                    </div>
                  </div>
                </div>
                <div className="items-center self-stretch bg-zinc-100 flex justify-between gap-2 px-4 py-2.5 rounded-md max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/01db9790a0d9af331ec57fd5159d4f9b095e24274c43c3958ac5689598fffa4f?apiKey=d6479c9759d24260a152efdb16e597f6&"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
                    Search features, tutorials, etc.
                  </div>
                </div>
              </div>
              <div className="items-stretch flex justify-between gap-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e2bb711b1c65f7087817b9be114b36d0b5d884dc8b6ed150bd1bd019f266dba?apiKey=d6479c9759d24260a152efdb16e597f6&"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f99738493a25bb3f06d71ca895b7ef93b5710e5852d5d8490081e42ba7be20f?apiKey=d6479c9759d24260a152efdb16e597f6&"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
            <div className="justify-between items-center flex gap-5 mt-8 mx-3 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
              <div className="text-zinc-900 text-xl font-medium leading-7 my-auto">
                Overview
              </div>
              <div className="rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex items-center justify-between gap-2.5 px-3.5 py-2.5 border-solid">
                <div className="text-neutral-600 text-base leading-6 grow whitespace-nowrap my-auto">
                  Last Month
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea6c4d4d063668e97fd083caf97d2f32b96e8adf10b71eb46643bd88c8662b37?apiKey=d6479c9759d24260a152efdb16e597f6&"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
            <div className="mt-6 mx-3 max-md:max-w-full max-md:mr-2.5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="shadow-sm bg-white flex grow flex-col w-full pl-5 pr-20 py-5 rounded-lg items-start max-md:max-w-full max-md:mt-5 max-md:pr-5">
                    <div className="text-neutral-600 text-base leading-6 whitespace-nowrap">
                      Online orders
                    </div>
                    <div className="text-zinc-900 text-3xl font-medium leading-10 mt-4">
                      231
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="shadow-sm bg-white flex grow flex-col w-full pl-5 pr-20 py-5 rounded-lg items-start max-md:max-w-full max-md:mt-5 max-md:pr-5">
                    <div className="text-neutral-600 text-base leading-6">
                      Amount received
                    </div>
                    <div className="text-zinc-900 text-3xl font-medium leading-10 whitespace-nowrap mt-4">
                      ₹23,92,312.19
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-zinc-900 text-xl font-medium leading-7 mt-8 mx-3 max-md:max-w-full max-md:mr-2.5">
              Transactions | This Month
            </div>
            <div className="items-end shadow-sm bg-white flex flex-col mt-5 mx-3 pt-3 pb-6 px-3 rounded-lg max-md:max-w-full max-md:mr-2.5">
              <div className="justify-between items-stretch self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white flex justify-between gap-2 px-4 py-2.5 border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/18b0922a29d813a55d9b5a3f247d192c357c654ffe7ed7b00a15b928b5517e47?apiKey=d6479c9759d24260a152efdb16e597f6&"
                    className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-neutral-400 text-sm leading-5 self-stretch grow whitespace-nowrap">
                    Search by order ID...
                  </div>
                </div>
                <div className="justify-end items-stretch self-center flex gap-3 my-auto">
                  <div className="items-stretch rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white flex justify-between gap-1.5 px-3 py-1.5 border-solid">
                    <div className="text-neutral-600 text-base leading-6">
                      Sort
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ade94f6f2fb6ac3b586f3967f314e06dcf33ba19f83f9ba07a0b35aa41cb0108?apiKey=d6479c9759d24260a152efdb16e597f6&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/292f7ba24753d98c8b1dfb784cfd238342ba9e34a3c5df64d81152c052e02429?apiKey=d6479c9759d24260a152efdb16e597f6&"
                    className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
              <div className="items-stretch rounded bg-zinc-100 self-stretch flex w-full justify-between gap-5 mt-3 px-3 py-2.5 max-md:max-w-full max-md:flex-wrap">
                <div className="flex items-stretch justify-between gap-5">
                  <div className="text-neutral-600 text-sm font-medium leading-5">
                    Order ID
                  </div>
                  <div className="items-stretch flex justify-between gap-1">
                    <div className="text-neutral-600 text-sm font-medium leading-5 grow whitespace-nowrap">
                      Order date
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/41baa63869550ebd5efb771f1ae94bb02443c40981c67d988fe49ff140666a78?apiKey=d6479c9759d24260a152efdb16e597f6&"
                      className="aspect-square object-contain object-center w-2 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-5">
                  <div className="text-neutral-600 text-right text-sm font-medium leading-5">
                    Order amount
                  </div>
                  <div className="items-stretch flex justify-between gap-1">
                    <div className="text-neutral-600 text-right text-sm font-medium leading-5 grow whitespace-nowrap">
                      Transaction fees
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a9bac7cbe59b8f2114b6d357731bf85a6b826c08d572dd635dc46a6ec446285?apiKey=d6479c9759d24260a152efdb16e597f6&"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </div>
                  <div className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </div>
                  <div className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </div>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-center self-center flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="justify-between rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex gap-1.5 p-1.5 border-solid items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cf1d4ee6692cb5a173aa36f921bca0dc6b7cdb56296972665f8f16abf418fb4?apiKey=d6479c9759d24260a152efdb16e597f6&"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-600 text-center text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
                    Previous
                  </div>
                </div>
                <div className="items-start flex gap-2 my-auto">
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 grow whitespace-nowrap my-auto">
                    1
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    ...
                  </div>
                  <div className="text-white text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-center rounded bg-sky-700 self-stretch aspect-square h-7 px-1.5">
                    10
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    11
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    12
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    13
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    14
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    15
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    16
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    17
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 grow whitespace-nowrap my-auto">
                    18
                  </div>
                </div>
                <div className="justify-between items-stretch rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex gap-1.5 pl-3 pr-1.5 py-1.5 border-solid">
                  <div className="text-neutral-600 text-center text-sm font-medium leading-5">
                    Next
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d46cc7bbcab3183a98a9a4cb2d57e6270b75b052c48f571e526ff4b3305327d?apiKey=d6479c9759d24260a152efdb16e597f6&"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


