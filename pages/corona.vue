<template>
  <div class="Corona">
    <h2 class="Corona-Heading">
      {{ $t('فيروس كورونا الجديد ( كورونا COVID-19 )') }}
    </h2>
    <TextCard :title="$t('مقدمة:')">
      <p>
        في 31 ديسمبر من عام 2019م تم إبلاغ المكتب الإقليمي لمنظمة الصحة العالمية
        في الصين بحالات الالتهاب الرئوي المسبب لمرض غير معروف تم اكتشافه في
        مدينة ووهان بمقاطعة هوبي الصينية، وتم إعلان فيروس (كورونا الجديد) على
        أنه الفيروس المسبب لتلك الحالات من قِبَل السلطات الصينية يوم 7 يناير
        2020م.
      </p>
    </TextCard>
    <TextCard :title="$t('الأسئلةالشائعة')">
      <v-expansion-panels>
        <v-expansion-panel :key="1">
          <v-expansion-panel-header
            >ما هي فصائل فيروسات (كورونا) التي تم اكتشافها حتى الآن والتي يمكن
            أن يُصاب البشر بالعدوى بها من مصدر حيواني؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            انتقل فيروس (كورونا) المسبب لمتلازمة الالتهاب الرئوي الحاد الوخيم
            (السارس) من قطط الزباد إلى البشر في الصين عام 2002م، وقد انتقل فيروس
            (كورونا) المسبب لمتلازمة الشرق الأوسط التنفسية (Mers) من الإبل إلى
            البشر في المملكة العربية السعودية عام 2012م. كذلك انتقل فيروس
            (كورونا) الأخير COVID-19 من فصيلة فيروسات (كورونا)، و كان له ارتباط
            بسوق للبحريات والحيوانات في مدينة ووهان الصينية. وهناك العديد من
            سلالات فيروس (كورونا) الأخرى المعروفة التي تسري بين الحيوانات دون أن
            تنتقل العدوى منها إلى البشر حتى الآن.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel :key="2">
          <v-expansion-panel-header
            >ما هو فيروس (كورونا) COVID-19؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            فيروس (كورونا) من فصيلة فيروسات (كورونا) الجديد؛ حيث ظهرت أغلب حالات
            الإصابة به في مدينة ووهان الصينية نهاية ديسمبر ٢٠١٩م على صورة التهاب
            رئوي حاد.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel :key="3">
          <v-expansion-panel-header
            >كيف تم تحديد نوع الفيروس؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            تم التعرف على الفيروس عن طريق التسلسل الجيني.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel :key="4">
          <v-expansion-panel-header
            >ما أصل هذا الفيروس؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            يُعتقد أن فيروس (كورونا) الجديد مرتبط بالحيوان؛ حيث إن أغلب الحالات
            الأولية كان لها ارتباط بسوق للبحريات والحيوانات في مدينة ووهان.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel :key="5">
          <v-expansion-panel-header
            >هل ينتقل الفيروس بين البشر؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            نعم، ينتقل الفيروس بين البشر من الشخص المصاب بالعدوى إلى شخص آخر عن
            طريق المخالطة القريبة دون حماية.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel :key="6">
          <v-expansion-panel-header
            >أنا قادم من الصين وأشكو ارتفاعًا في الحرارة وضيقًا في التنفس.. ماذا
            أفعل؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            يمكنك التوجه إلى أقرب منشأة صحية. ولمزيد من الاستفسارات يمكنك
            الاتصال بمركز (3030).
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel :key="7">
          <v-expansion-panel-header
            >هل ينتقل فيروس (كورونا) COVID-19 عبر الشحنات القادمة من الصين؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            بناءً على المعلومات المتوافرة حاليًا، لا يوجد خطر في البضائع
            المستوردة من الصين.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel :key="7">
          <v-expansion-panel-header
            >ما أعراض الإصابة بفيروس (كورونا) COVID-19؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            تشمل الأعراض النمطية لفيروس (كورونا): الحمى - السعال - ضيق التنفس -
            وأحيانًا تتطور الإصابة إلى التهاب رئوي. وقد يتسبب في مضاعفات حادة
            لدى الأشخاص ذوي الجهاز المناعي الضعيف، والمسنين والأشخاص المصابين
            بأمراض مزمنة مثل: السرطان، والسكري، وأمراض الرئة المزمنة. وعند
            الشعور بأي من الأعراض السابقة يجب الاتصال بمركز (3030).
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </TextCard>

    <TextCard :title="$t('خطوات رئيسة للوقاية من (كورونا) COVID-19:')">
      <ul>
        <li>النظافة الشخصية.</li>
        <li>اتباع آداب العطس والسعال.</li>
        <li>تجنب المخالطة اللصيقة بشخص لديه أعراض نزلة برد أو أنفلونزا.</li>
        <li>
          تجنب التعامل غير الآمن مع الحيوانات، سواء كانت برية أو في المزرعة.<br />
        </li>
      </ul>
      <h3>آداب العطاس لتقليل العدوى:</h3>
      <ul>
        <li>
          استخدم المناديل الورقية للعطاس أو السعال، والتخلص منها بأسرع وقت ممكن.
        </li>
        <li>غسل اليدين بالماء الدافئ والصابون.</li>
        <li>استخدم المرفق عن طريق ثني الذراع.</li>
      </ul>
      <h3>توصيات للمسافرين خلال السفر:</h3>
      <ul>
        <li>
          تجنب الاقتراب من الأشخاص الذين تظهر عليهم علامات الرشح أو الأنفلونزا،
          أو السعال.
        </li>
        <li>غسل الأيدي باستمرار.</li>
        <li>تجنب ملامسة العين، أو الأنف، أو الفم قبل غسل الأيدي.</li>
        <li>تجنب التعرض للحيوانات البرية أو في المزرعة.</li>
        <li>
          عند الشعور بالتعب يجب التوجه أقرب منشأة صحية، والتأكد من الحالة
          الصحية.<br />&#8203;<br />
        </li>
      </ul>
    </TextCard>
    <TextCard :title="$t('المصدر:')">
      <a
        href="https://www.moh.gov.sa/HealthAwareness/EducationalContent/Corona/Pages/corona.aspx"
        target="_blank"
        >فيروس كورونا الجديد ( كورونا COVID-19 ): وزارة الصحة السعودية
      </a>
    </TextCard>
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
.Corona {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    list-style: none;
    padding: 12px 0;
  }
  h3 {
    font-size: 1.628rem;
    margin-top: 30px;
  }
  .v-expansion-panel-header {
    font-weight: 600;
  }
}
</style>
