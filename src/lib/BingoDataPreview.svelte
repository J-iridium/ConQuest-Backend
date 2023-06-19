<script lang="ts">
    export let title: string;
    export let description: string;
    export let expiresAt: boolean;
</script>

<div class="main">
    <h2>{title}</h2>
    <h4>{description}</h4>
    <div class="info">

    </div>
</div>

<style lang="scss" >
    .main {
        background-color: #1da1f2;
        color: #fff;
        padding: 8px 16px;
        font-size: 16px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        h2,h4 {
            padding-bottom: 0px;
            margin-bottom: 0px;
        }

        .info {
            display: flex;
            flex-direction: row;
        }
    }
</style>