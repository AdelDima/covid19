<template>
  <div class="About">
    <h2 class="About-Heading">
      {{ $t('当サイトについて') }}
    </h2>
    <TextCard>
      {{
        $t(
          '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
        )
      }}<br />
      <br />
      {{
        $t(
          '東京都による公式情報と客観的な数値をわかりやすく伝えることで、東京都にお住まいの方や、東京都内に拠点を持つ企業の方、東京都を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('ブラウザ環境について')">
      {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}<br />
      <br />
      <ul class="About-Browser-List">
        <li>{{ $t('Microsoft Edge 最新版') }}</li>
        <li>{{ $t('Mozilla Firefox 最新版') }}</li>
        <li>{{ $t('Google Chrome 最新版（Windows 10以上）') }}</li>
        <li>{{ $t('Apple Safari (macOS) 最新版') }}</li>
        <li>{{ $t('Opera Software ASA Opera 最新版') }}</li>
      </ul>
      {{
        $t(
          '※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('当サイトへのリンクについて')">
      {{ $t('当サイトへのリンクは自由です。') }}
    </TextCard>
    <TextCard :title="$t('JavaScriptについて')">
      {{ $t('当サイトではJavaScriptを使用しております。') }}<br />
      {{
        $t(
          'JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。'
        )
      }}<br />
      {{
        $t(
          '当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('クッキー (Cookie) について')">
      {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
      {{
        $t(
          'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('Google Analyticsの利用について')">
      {{
        $t(
          '当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。'
        )
      }}<br />
      {{
        $t(
          'Google Analyticsは、当サイトが発行するクッキー (Cookie) を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー (Cookie) の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。'
        )
      }}<br />
      {{
        $t(
          '取得したデータは Webサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。'
        )
      }}<br />
      {{
        $t(
          'Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。'
        )
      }}<br />
      <ul>
        <li>
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/US"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analytics利用規約') }}
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy?hl=ar"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Googleのプライバシーポリシー') }}
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/2838718?hl=ar"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analyticsに関する詳細情報') }}
          </a>
        </li>
      </ul>
    </TextCard>
    <TextCard :title="$t('免責事項')">
      {{
        $t(
          'また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          '当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('ソースコードについて')">
      {{
        $t(
          '当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。'
        )
      }}
    </TextCard>
    <!--
    <TextCard :title="$t('حول تطوير الموقع')">
      <p>
        تعديل وتطوير الموقع من طرف
        <a
          target="_blank"
          rel="noopener"
          place="githubRepo"
          href="https://www.linkedin.com/in/adel-tahri-09335169/"
          >عادل طاهري</a
        >
      </p>
      <p>
        ترجمة
        <a
          target="_blank"
          rel="noopener"
          place="githubRepo"
          href="https://www.linkedin.com/in/salma-gueddouh/"
          >Salma GUEDDOUH</a
        >
      </p>
      <p>
        الموقع إعتمد على
        <a
          target="_blank"
          rel="noopener"
          place="githubRepo"
          href="https://stopcovid19.metro.tokyo.lg.jp/"
          >Tokyo COVID-19 Task Force website</a
        >
        بموجب الرخصة الدولية للمشاع الإبداعي 4.0
      </p>
    </TextCard> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import TextCard from '@/components/TextCard.vue'

export default Vue.extend({
  components: {
    TextCard
  },
  head: (): MetaInfo => ({
    title: '当サイトについて'
  })
})
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 12px 0;
  }
}
</style>
