export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            error_log: function (errors: object){
                let re_message : any = []

                if(errors.message){
                    re_message.push(errors.message)

                    return re_message.join('\n');
                }
                
                if(errors.length){

                    if(errors[0]){
                        re_message.push(errors[0])

                        return re_message.join('\n');
                    }
                }
                Object.keys(errors).map((key) => re_message.push(errors[key][0]))


                return re_message.join('\n')
            }
        }
    }
})