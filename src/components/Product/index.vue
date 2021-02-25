<template>
    <div>hello</div>
</template>

<script>
export default {
    data()
    {
        return {

        };
    },
    mounted()
    {
        this.$store.dispatch('product/getProducts');
    }
}
</script>