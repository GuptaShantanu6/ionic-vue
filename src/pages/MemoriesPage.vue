<template>
    <base-layout page-title="All Memories">
            <ion-list>
                <ion-item router-link="/memories/1">Beach</ion-item>
                <ion-item router-link="/memories/2">Desert</ion-item>
            </ion-list>
    </base-layout>
</template>

<script>
import {IonList, IonItem} from '@ionic/vue'
export default {
    components: {
        IonList,
        IonItem
    },
};
</script>
 