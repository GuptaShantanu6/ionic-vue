<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, 
        IonHeader, 
        IonContent, 
        IonTitle, 
        IonToolbar,
        IonBackButton,
        IonButtons
    } from '@ionic/vue'
export default {
    props: ["pageTitle","pageDefaultBackLink"],

    components: {
        IonPage,
        IonHeader,
        IonContent,
        IonTitle,
        IonToolbar,
        IonBackButton,
        IonButtons
    }
    
}
</script>

<style scoped>
    ion-toolbar {
        --background: var(--ion-color-danger);
        --color: #ffffff
    }
</style>