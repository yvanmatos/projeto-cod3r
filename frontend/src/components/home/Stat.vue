<template>
    <div class="stat" :style="style">
        <div class="stat-icon">
            <i :class="icon"></i>
        </div>
        <div class="stat-info">
            <span class="stat-title">{{ title }}</span>
            <span class="stat-value">{{ value }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Stat',
    props: ['title', 'value', 'icon', 'color'],
    computed: {
        style() {
            return "background: " + (this.color || "#fff")
        }
    }
}
</script>

<style>
    .stat {
        flex: 1;
        display: flex;
        border-radius: 5px;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 20px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .stat-icon {
        display: flex;
        align-items: center;
    }

    .stat-icon i {
        font-size: 5rem;
        color: #fff;
    }

    .stat-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #fff;
    }

    .stat-title {
        font-size: 1.2rem;
    }

    .stat-value {
        font-size: 3rem;
        font-weight: 800;
    }
</style>