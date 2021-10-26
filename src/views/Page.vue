<template>
  <div>
    <BaseCard
      title="This is the Page Card"
      subtitle="this is dummy subtitle"
    >
      <template v-slot:comcode>
        <p class="text-muted mb-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab hic nihil
          ut recusandae officia laboriosam, commodi eius temporibus consequatur
          repudiandae accusamus eaque iste ad quis laudantium aperiam
          voluptatibus. Odio, inventore?
        </p>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "../components/card/BaseCard";
export default {
  name: "Page",
  components: {
    BaseCard,
  },
  data: () => ({}),
};
</script>
