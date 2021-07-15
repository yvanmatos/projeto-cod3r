<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard" 
            sub="Projeto Final"
        />
        <div class="stats">
            <Stat title="Categorias" :value="stat.categories"
                icon="fa fa-folder" color="linear-gradient(180deg, rgba(210,40,43,1) 0%, rgba(213,77,80,1) 100%)" />
            <Stat title="Artigos" :value="stat.articles"
                icon="fa fa-file" color="linear-gradient(180deg, rgba(31,190,111,1) 0%, rgba(59,196,128,1) 100%)" />
            <Stat title="Usuários" :value="stat.users"
                icon="fa fa-user" color="linear-gradient(180deg, rgba(21,106,186,1) 0%, rgba(50,130,205,1) 100%)" />
        </div>
    </div>
</template>

<script>

import PageTitle from '@/components/template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`)
                .then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>