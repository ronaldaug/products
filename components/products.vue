<template>
    <div id="products">
    <vs-row :w="row">
        <vs-col :w="col" :key="p.productId" v-for="p in products">
        <vs-card>
            <template #title>
                <a :href="p.productAffLink"><h3>{{p.productName}}</h3></a>
            </template>
            <template #img>
                <a :href="p.productAffLink"><img :src="p.productImage" :alt="p.productName"></a>
            </template>
            <template #text>
                <a :href="p.productAffLink"><p>
                    {{p.productDescription}}
                </p></a>
            </template>
            <template #interactions>
                <vs-button danger icon>
                <i class='bx bx-heart'></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                <span class="span">
                    {{removeLastComma(p.productCategoriesLabel)}}
                </span>
                </vs-button>
            </template>
        </vs-card>
        </vs-col>
    </vs-row>
    </div>

</template>

<script>
// import products from './../products.json';

export default {
    name:"Products",
    props:['products'],
    data(){
        return{
            row:12,
            col:3
        }
    },
    methods:{
        removeLastComma(str){
            if(!str) return;
            return str.substr(0,str.length - 2);
        }
    },
    mounted(){
        if(process.browser){
            const ww = window.innerWidth;
            if(ww < 768){
                this.col = 4;
            }

            if(ww < 578){
                this.col = 6;
            }

            if(ww < 400){
                this.col = 1;
            }
        }
    }
}
</script>