import { entity } from "simpler-state";

export const showNotification = entity(false)

export const setShowNotification = (currentState : boolean) => {  
    showNotification.set(currentState)
}