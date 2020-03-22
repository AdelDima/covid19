(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{466:function(t,n,e){var content=e(470);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("088dc89c",content,!0,{sourceMap:!1})},469:function(t,n,e){"use strict";var o=e(466);e.n(o).a},470:function(t,n,e){(n=e(10)(!1)).push([t.i,".TextCard{\n  margin-bottom:20px\n}\n.TextCard-Heading{\n  font-size:24px;\n  font-size:1.5rem;\n  color:#2d3748;\n  font-weight:bold;\n  margin-bottom:12px\n}\n.TextCard-Heading a{\n  font-size:24px;\n  font-size:1.5rem;\n  color:#2d3748;\n  font-weight:bold;\n  color:#3182ce !important;\n  text-decoration:none\n}\n.TextCard-Heading a:hover{\n  text-decoration:underline\n}\n.TextCard-ExternalLinkIcon{\n  margin-left:2px;\n  color:#4a5568 !important\n}\n.TextCard-Body *{\n  font-size:16px;\n  font-size:1rem;\n  color:#1a202c;\n  line-height:160%;\n  font-weight:normal\n}\n.TextCard-Body a{\n  word-break:break-all;\n  color:#3182ce;\n  text-decoration:none\n}\n.TextCard-Body a:hover{\n  text-decoration:underline\n}",""]),t.exports=n},472:function(t,n,e){"use strict";var o=e(1).a.extend({props:{title:{type:String,default:""},body:{type:String,default:""},link:{type:String,default:""}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)}}}),r=(e(469),e(18)),l=e(47),_=e.n(l),c=e(138),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"TextCard bg-white w-full h-full p-6 rounded overflow-hidden shadow-lg mb-4"},[t.title?e("h3",{staticClass:"TextCard-Heading"},[t.link?e("div",[e("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.isInternalLink(t.link)?t._e():e("v-icon",{staticClass:"TextCard-ExternalLinkIcon",attrs:{size:"20"}},[t._v("\n        mdi-open-in-new\n      ")])],1):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?e("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?e("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);n.a=component.exports;_()(component,{VIcon:c.a})},475:function(t,n,e){var content=e(519);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("6f7c24e4",content,!0,{sourceMap:!1})},518:function(t,n,e){"use strict";var o=e(475);e.n(o).a},519:function(t,n,e){(n=e(10)(!1)).push([t.i,".About-Heading{\n  font-size:30px;\n  font-size:1.875rem;\n  font-weight:normal;\n  color:#2d3748;\n  margin-bottom:12px\n}\n.About .About-Browser-List{\n  list-style:none;\n  padding:12px 0\n}",""]),t.exports=n},617:function(t,n,e){"use strict";e.r(n);var o=e(1),r=e(472),l=o.a.extend({components:{TextCard:r.a},head:function(){return{title:"当サイトについて"}}}),_=(e(518),e(18)),component=Object(_.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"About"},[e("h2",{staticClass:"About-Heading"},[t._v("\n    "+t._s(t.$t("当サイトについて"))+"\n  ")]),t._v(" "),e("TextCard",[t._v("\n    "+t._s(t.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"))),e("br"),t._v(" "),e("br"),t._v("\n    "+t._s(t.$t("東京都による公式情報と客観的な数値をわかりやすく伝えることで、東京都にお住まいの方や、東京都内に拠点を持つ企業の方、東京都を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。"))+"\n  ")]),t._v(" "),e("TextCard",{attrs:{title:t.$t("ブラウザ環境について")}},[t._v("\n    "+t._s(t.$t("当サイトは以下の環境でご覧いただくことを推奨いたします。"))),e("br"),t._v(" "),e("br"),t._v(" "),e("ul",{staticClass:"About-Browser-List"},[e("li",[t._v(t._s(t.$t("Microsoft Edge 最新版")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Mozilla Firefox 最新版")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Google Chrome 最新版（Windows 10以上）")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Apple Safari (macOS) 最新版")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Opera Software ASA Opera 最新版")))])]),t._v("\n    "+t._s(t.$t("※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。"))+"\n  ")]),t._v(" "),e("TextCard",{attrs:{title:t.$t("当サイトへのリンクについて")}},[t._v("\n    "+t._s(t.$t("当サイトへのリンクは自由です。"))+"\n  ")]),t._v(" "),e("TextCard",{attrs:{title:t.$t("JavaScriptについて")}},[t._v("\n    "+t._s(t.$t("当サイトではJavaScriptを使用しております。"))),e("br"),t._v("\n    "+t._s(t.$t("JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。"))),e("br"),t._v("\n    "+t._s(t.$t("当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"))+"\n  ")]),t._v(" "),e("TextCard",{attrs:{title:t.$t("クッキー (Cookie) について")}},[t._v("\n    "+t._s(t.$t("当サイトの一部ではクッキーを使用しています。"))),e("br"),t._v("\n    "+t._s(t.$t("クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。"))),e("br"),t._v(" "),e("br"),t._v("\n    "+t._s(t.$t("ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。"))),e("br"),t._v(" "),e("br"),t._v("\n    "+t._s(t.$t("ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。"))+"\n  ")]),t._v(" "),e("TextCard",{attrs:{title:t.$t("Google Analyticsの利用について")}},[t._v("\n    "+t._s(t.$t("当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。"))),e("br"),t._v("\n    "+t._s(t.$t("Google Analyticsは、当サイトが発行するクッキー (Cookie) を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー (Cookie) の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。"))),e("br"),t._v("\n    "+t._s(t.$t("取得したデータは Webサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。"))),e("br"),t._v("\n    "+t._s(t.$t("Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。"))),e("br"),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://marketingplatform.google.com/about/analytics/terms/US",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Google Analytics利用規約"))+"\n        ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://policies.google.com/privacy?hl=ar",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Googleのプライバシーポリシー"))+"\n        ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://support.google.com/analytics/answer/2838718?hl=ar",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Google Analyticsに関する詳細情報"))+"\n        ")])])])]),t._v(" "),e("TextCard",{attrs:{title:t.$t("免責事項")}},[t._v("\n    "+t._s(t.$t("また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。"))),e("br"),t._v(" "),e("br"),t._v("\n    "+t._s(t.$t("当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。"))+"\n  ")]),t._v(" "),e("TextCard",{attrs:{title:t.$t("ソースコードについて")}},[t._v("\n    "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))+"\n  ")])],1)}),[],!1,null,null,null);n.default=component.exports}}]);