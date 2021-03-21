<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>All Memories</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>Shantanu</ion-item>
                <ion-item>Shreya</ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonContent, IonTitle, IonToolbar, IonList, IonItem} from '@ionic/vue'
export default {
    components: {
        IonTitle,
        IonContent,
        IonHeader,
        IonPage,
        IonToolbar,
        IonList,
        IonItem
    },
};
</script>



 