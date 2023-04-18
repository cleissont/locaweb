<template>
  <div
    class="container-choice-plan column"
    v-for="(plan, index) in plans"
    :key="index"
  >
    <div class="box-plan">
      <p class="text-plan">{{ plan.buttonLabel }}</p>
      <div class="text-value">
        <p class="sub-text-plan">{{ plan.textPlan }}</p>
        <p class="sub-text-plan">{{ plan.textPlan_1 }}</p>
        <p class="sub-text-plan">{{ plan.textPlan_2 }}</p>
      </div>
      <p>{{ plan.subText }}</p>
      <p>{{ plan.subText_1 }}</p>
      <div class="box-idea">
        <p>{{ plan.title }}</p>
      </div>
      <div class="box-button">
        {{ plan.buttonChoice }}
      </div>
    </div>
    <div>
      <div class="description-plan">
        <span class="text-description">
          {{ plan.textServer }}
          <span class="text-description text-description-underline">{{
            plan.textServer_1
          }}</span></span
        >
        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.subTextServer }}
        </p>

        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.descriptionTextServer }}
        </p>

        <p>
          <icon class="material-symbols-outlined">check</icon
          ><span class="text-description-underline">{{
            plan.descriptionTextServer_1
          }}</span>
          {{ plan.descriptionTextServer_2 }}
        </p>

        <p>
          <icon class="material-symbols-outlined">check</icon
          ><span class="text-description-underline">{{
            plan.descriptionTextServer_3
          }}</span>
          {{ plan.descriptionTextServer_4 }}
        </p>

        <p>
          <icon class="material-symbols-outlined">check</icon>
          <span class="text-description-underline">
            {{ plan.descriptionTextServer_5 }} </span
          >{{ plan.descriptionTextServer_6 }}
        </p>

        <p class="text-description">{{ plan.textSuport }}</p>
        <p class="text-description">{{ plan.textApp }}</p>

        <p>
          <icon class="material-symbols-outlined">check</icon>
          {{ plan.descriptionApp }}
        </p>
        <p>
          <icon class="material-symbols-outlined">check</icon>
          {{ plan.descriptionApp_1 }}
        </p>
        <p>
          <icon class="material-symbols-outlined">check</icon>
          {{ plan.descriptionApp_2 }}
        </p>

        <p class="text-description">{{ plan.migrationFree }}</p>
        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.descriptionMigrationFree }}
        </p>

        <p class="text-description">{{ plan.textYou }}</p>
        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.descriptionTextYou }}
        </p>
        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.descriptionTextYou_1 }}
        </p>
        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.descriptionTextYou_2 }}
        </p>
        <p>
          <icon class="material-symbols-outlined">check </icon
          >{{ plan.descriptionTextYou_3 }}
        </p>
        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.descriptionTextYou_4 }}
        </p>
        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.descriptionTextYou_5 }}
        </p>
        <p>
          <icon class="material-symbols-outlined">check</icon
          >{{ plan.descriptionTextYou_6 }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex"
  export default {
    computed: {
      ...mapState({
        plans: (state) => state.plans,
      }),
    },
  }
</script>
<style lang="scss">
  .container-choice-plan {
    border: 1px solid #e6eaf2;
    max-width: 348px;
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid #ccc;
  }
  .box-plan {
    text-align: center;
  }
  .box-idea {
    border: 1px solid #e6eaf2;
    height: 74px;
  }
  .text-value {
    display: flex;
    place-content: center;
  }
  .description-plan {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 15px;
  }
  .box-button {
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 20px;
    background: #f30168;
    border-radius: 5px;
    border: none;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .text-plan {
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
    text-align: center;
    color: #666666;
  }
  .sub-text-plan {
    font-weight: 700;
    font-size: 34px;
    line-height: 43px;
    text-align: center;
    color: #f30168;
  }
  .text-description-colunm {
    display: flex;
  }
  .text-description {
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: #666666;
  }
  .text-description-underline {
    text-decoration: underline;
  }
  .material-symbols-outlined {
    font-size: 18px;
    display: contents;
  }
</style>
