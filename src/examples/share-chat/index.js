import React from "react";

import { data } from "./dummy-data";

import "./index.scss";

const ShareChatCard = ({ name, text1, text2, details, imgSrc }) => (
  <div className="card-7 Pb($xs)">
    <div className="D(b) Px($md) Bgc($white) ">
      <div className="Pos(r) Py($xs) Pend($xl)">
        <a
          href="/profile/abtakmedia?referer=trendingFeed"
          className="D(f) Ai(c) Pend($xxs) "
        >
          <div className="stensil-dark D(if) Jc(c) Ai(c) Va(m) W($xxl) H($xxl) active_Scale(1.15) avatar Bdrs(50%) Ov(h) Trs($trsicon) Fx(n) Bgc($white3) fitcover" />
          <div className="H(100%) Pstart($xs) Fxg(1) Miw(0)">
            <div className="H(100%) Ta(start) D(f) Jc(c) Ai(fs) Fxd(c)">
              <div className="D(f) Ai(c) W(100%) ">
                <strong className="stensil Whs(nw) Ovx(h) Tov(e) Maw(100%) Fz($fzbutton) Lh($lhmediumCaption) Fw(600) C($darkText) Whs(nw) Ovx(h) Tov(e) Maw(100%)">
                  {name}
                </strong>
                <div className="D(if) Jc(c) Ai(c) Va(m) W($mmd) H($mmd) active_Scale(1.15)  Trs($trsicon) Mstart($xxs) Fxs(0)">
                  <div className="W(100%) H(100%)  ">
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="Fill(cc) Fxg(1) stensil-svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M13.46 7l.435-1.344a2.154 2.154 0 0 0-1.069-2.58l-1.258-.644-.642-1.257A2.153 2.153 0 0 0 8.345.105L7 .54 5.656.105a2.154 2.154 0 0 0-2.58 1.069l-.644 1.258-1.258.643a2.154 2.154 0 0 0-1.07 2.581L.54 7 .105 8.344a2.154 2.154 0 0 0 1.069 2.581l1.258.643.642 1.258a2.153 2.153 0 0 0 2.581 1.068L7 13.46l1.344.435a2.154 2.154 0 0 0 2.581-1.069l.643-1.258 1.258-.642a2.153 2.153 0 0 0 1.068-2.581L13.46 7z"
                          fill="#40C9FF"
                        />
                        <path
                          d="M6.404 9.713a.583.583 0 0 1-.825 0L3.975 8.109a.672.672 0 0 1 .95-.95l1.067 1.065 3.082-3.082a.672.672 0 0 1 .95.95l-3.62 3.62z"
                          fill="#fff"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <path fill="#fff" d="M0 0h14v14H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="Fz($fzcaption) Lh($lhcaption) C($darkTextSecondary) Whs(nw) Ovx(h) Tov(e) Maw(100%) Mt($3xs)">
                <div className="D(f)">
                  <div className="stensil">{text1}</div>
                  <div className="Px($xxs) stensil-ignore">•</div>
                  <div className="stensil">{text2}</div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="Pos(a) T(50%) TranslateY(-50%) D(f) Ai(c) End($nxxs)">
          <a
            className="Pos(r) D(f) Jc(c) Ai(c) Va(m) undefined M(0) O(0) Us(n) Fz($fzbutton) Lh($lhbutton)  undefined W(100%) H(100%) W($xl) H($xl)"
            aria-label="Click for more options"
            href="/shareModal?referer=trendingFeed"
          >
            <div className="D(f) Jc(c) Ai(c)  P($xxs) Bgc($white3):h transparent_Bgc($darkDivider):h Bdrs(50%) Ov(h)">
              <div className="D(if) Jc(c) Ai(c) Va(m) W($lg) H($lg) active_Scale(1.15) avatar Bdrs(50%) Ov(h) Trs($trsicon) C($darkTextSecondary)">
                <div className="W(100%) H(100%)">
                  <svg
                    viewBox="0 0 24 24"
                    className="Fill(cc) Fxg(1) stensil-svg"
                  >
                    <path d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <a className="D(b) Mx($nmd)" href="/item/qRG0KaK?referer=trendingFeed">
        <div className="Pos(r) Ov(h)">
          <div
            className="Pos(r) W(100%) Ov(h) Bgc($white4) stensil"
            style={{ paddingBottom: "100%" }}
          >
            <div>
              <img
                src={imgSrc}
                title=" પંચાંગ - ShareChat"
                alt=" પંચાંગ - ShareChat"
                className="Us(n) Of(c) Pos(a) Start(0) W(100%) T(0) H(100%)"
              />
            </div>
            <div className="Pos(a) Start(0) W(100%) T(0) H(100%) Bg($fgbottomAlign) stensil-dark">
              <div className="Pos(a) B(0) End(0) D(f) Ai(c) P($xs)">
                <div className="D(if) Jc(c) Ai(c) Va(m) W($lg) H($lg) active_Scale(1.15)  Trs($trsicon) C($white)">
                  <div className="W(100%) H(100%) ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="Fill(cc) Fxg(1) stensil-svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 4a1 1 0 0 0-1 1v6h1a1 1 0 1 1 0 2H6v6a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3v-6H3a1 1 0 1 1 0-2h1V5a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H7zm7-1a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v6h1a1 1 0 1 1 0 2h-1v6a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-6h-1a1 1 0 1 1 0-2h1V5a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1zm-5 9a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="Ov(h)">
        <div className="Py($xs) Whs(pw) Wow(bw) C($darkText) Fz($fzbutton)">
          <span className="Pend($xxs) C($primary) Fw(600) stensil">
            {details.title}
          </span>
          <span className="Pend($xxs) C($blue) Fw(600) stensil">
            {details.title}
          </span>{" "}
          <span className="Pend($xxs) C($blue) Fw(600) stensil">
            {details.title}
          </span>
        </div>
      </div>
      <div className="D(f) Jc(sb) W(100%) Py($xs)">
        <div className="D(f) Ai(c) Fxg(1)">
          <div className="D(f) W(100%) Fxg(1)">
            <div className="D(f) W(100%) Fxg(1)">
              <button
                className="Bds(n) Va(bl) Cur(p) Pos(r) D(f) Jc(c) Ai(c) Va(m) P(0) M(0) O(0) Us(n) Fz($fzbutton) Lh($lhbutton)  Bgc(t)  C($darkTextSecondary)"
                aria-label="Click to share"
              >
                <div className="D(f) Jc(c) Ai(c)">
                  <div className="stensil-dark D(if) Jc(c) Ai(c) Va(m) W($lg) H($lg) active_Scale(1.15)  Trs($trsicon) undefined blink-light">
                    <img
                      className="W(100%) D(ib) fitcover_Of(c) avatar_H(100%) stensil-ignore"
                      src="http://www.sharechat.com/assets/svg/lazy/whatsapp.svg"
                      alt="શેર "
                    />
                  </div>
                  <span className="Pstart($xxs) Fz($sm) Lh($lhcaption) stensil-ignore">
                    7
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="D(f) W(100%) Fxg(1)">
            <button
              className="Bds(n) Va(bl) Cur(p) Pos(r) D(f) Jc(c) Ai(c) Va(m) P(0) M(0) O(0) Us(n) Fz($fzbutton) Lh($lhbutton)  Bgc(t)  C($darkTextSecondary)"
              aria-label="Click to like"
            >
              <div className="D(f) Jc(c) Ai(c)  ">
                <div className="D(if) Jc(c) Ai(c) Va(m) W($lg) H($lg) active_Scale(1.15)  Trs($trsicon)  ">
                  <div className="W(100%) H(100%)  ">
                    <svg
                      viewBox="0 0 24 24"
                      className="Fill(cc) Fxg(1) stensil-svg"
                    >
                      <path d="M15.1 4.9c-.1 0-.3 0-.4.1v-.4c0-.5-.3-1-.7-1.4-.4-.3-.9-.5-1.5-.5-.4 0-.8.2-1.1.4-.2-.5-.6-.8-1-1-.5-.1-1-.2-1.5 0-.2.1-.4.2-.6.4s-.4.4-.5.6c-.2.5-.3 1-.1 1.5l1.1 3.2c-1.4.3-2.6.9-3.6 1.9l-.2.2c-.4.4-.5.9-.5 1.4s.2 1 .5 1.4c-.5 0-1 .2-1.4.6-.4.3-.6.8-.6 1.3v.2c0 1.8.7 3.6 1.9 4.9s2.9 2.1 4.7 2.2 3.6-.5 4.9-1.7c1.4-1.2 2.3-2.8 2.5-4.6V7c0-.5-.2-1.1-.5-1.5-.4-.4-.9-.6-1.4-.6zm.4 10.6c-.2 1.4-.9 2.8-2 3.7s-2.5 1.4-4 1.2c-1.4-.2-2.7-.8-3.6-1.9S4.5 16 4.5 14.6c0-.1.1-.2.2-.3.2-.2.4-.2.6 0 .1.1.1.2.2.3v.1c0 1 .4 2 1.1 2.7 1.4 1.6 3.7 1.8 5.4.5.8-.6 1.4-1.5 1.5-2.5.1-.3.1-.5.1-.8v-.1c0-.9-.4-1.8-1-2.6-.4-.4-.8-.8-1.3-1-.5-.3-1.1-.4-1.8-.4-1 0-1.9.4-2.7 1l-.1.1c-.1 0-.2.1-.3.1s-.2-.1-.3-.1c-.1-.1-.1-.2-.1-.4 0-.1 0-.2.1-.3l.1-.1c1-1 2.3-1.5 3.6-1.6h1l-1.7-5v-.3c.1-.1.1-.2.3-.2h.4c.1 0 .2.1.2.2L12 9s0 .1.1.1h.2V9l-.1-4.1c0-.1 0-.2.1-.3s.2-.2.3-.2.2 0 .3.1.2.2.2.3l.3 4.3v.1h.1l1.1-2.4c.1-.2.2-.3.4-.3.1 0 .2.1.3.1.1.1.1.2.1.3zm-9.1-2.3c.5 0 1-.2 1.3-.5l.2-.1c.8-.6 1.8-.7 2.7-.3.3.1.6.4.8.6.4.5.6 1.1.6 1.7 0 .2 0 .3-.1.5-.1.6-.4 1.1-.9 1.5-.4.4-1 .6-1.6.6-.7 0-1.3-.3-1.8-.8-.4-.4-.6-1.1-.6-1.8v-.1c-.1-.4-.2-.9-.6-1.3z" />
                    </svg>
                  </div>
                </div>
                <span className="Pstart($xxs) Fz($sm) Lh($lhcaption) stensil-ignore">
                  14
                </span>
              </div>
            </button>
          </div>
          <div className="D(f) W(100%) Fxg(1)">
            <button
              className="Bds(n) Va(bl) Cur(p) Pos(r) D(f) Jc(c) Ai(c) Va(m) P(0) M(0) O(0) Us(n) Fz($fzbutton) Lh($lhbutton)  Bgc(t)  C($darkTextSecondary)"
              aria-label="Click to comment"
            >
              <div className="D(f) Jc(c) Ai(c)  ">
                <div className="D(if) Jc(c) Ai(c) Va(m) W($lg) H($lg) active_Scale(1.15)  Trs($trsicon)  ">
                  <div className="W(100%) H(100%)  ">
                    <svg
                      viewBox="0 0 24 24"
                      className="Fill(cc) Fxg(1) stensil-svg"
                    >
                      <path d="M3 21H2a1 1 0 0 0 1.514.858L3 21zm5-9a1 1 0 1 0 0 2v-2zm8 2a1 1 0 1 0 0-2v2zM8 8a1 1 0 0 0 0 2V8zm8 2a1 1 0 1 0 0-2v2zm-8.95 8.57l-.515-.858.515.858zM6 5h12V3H6v2zm14 2v8h2V7h-2zm-2 10H9.108v2H18v-2zm-11.465.712l-4.05 2.43 1.03 1.716 4.05-2.43-1.03-1.716zM4 21V7H2v14h2zm4-7h8v-2H8v2zm0-4h8V8H8v2zm1.108 7a5 5 0 0 0-2.573.712l1.03 1.715A3 3 0 0 1 9.107 19v-2zM20 15a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2zM18 5a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2zM6 3a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2V3z" />
                    </svg>
                  </div>
                </div>
                <span className="Pstart($xxs) Fz($sm) Lh($lhcaption) stensil-ignore">
                  કોમેન્ટ
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="D(f) Ai(c) Fxs(0) Mstart($md)">
          <button
            className="Bds(n) Va(bl) Cur(p) Pos(r) D(f) Jc(c) Ai(c) Va(m) P(0) M(0) O(0) Us(n) Fz($fzbutton) Lh($lhbutton)  Bgc(t) W(100%) H(100%) W(a) Fxg(1) C($darkTextSecondary)"
            aria-label="Click to download"
          >
            <div className="D(f) Jc(c) Ai(c)  ">
              <div className="D(if) Jc(c) Ai(c) Va(m) W($lg) H($lg) active_Scale(1.15)  Trs($trsicon) ">
                <div className="W(100%) H(100%)  ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="Fill(cc) Fxg(1) stensil-svg"
                  >
                    <path d="M9.492 4.104c0-.293.122-.574.34-.78A1.19 1.19 0 0 1 10.65 3h2.703c.307 0 .602.117.819.324.217.207.339.487.34.78v6.245c0 .05.02.099.058.134a.204.204 0 0 0 .14.056h2.312c.19-.014.381.03.545.125.163.095.29.238.363.406a.826.826 0 0 1 .044.532.858.858 0 0 1-.293.455l-4.862 4.63c-.22.201-.514.313-.82.313-.304 0-.598-.112-.819-.313l-4.861-4.63a.858.858 0 0 1-.295-.455.825.825 0 0 1 .044-.533.876.876 0 0 1 .364-.406.943.943 0 0 1 .546-.124H9.29a.207.207 0 0 0 .141-.055.189.189 0 0 0 .058-.135l.003-6.245zM20.722 16.244l-.542.594.542-.594zm-16.804.622l.071.002-.07-.002zM4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export { data };
export default ShareChatCard;
