import { defineComponent, ref,reactive, watch, watchEffect } from "vue"
const hello=defineComponent({
  emits:[],
  setup(){
    const msg=ref('msg')
    const obj=reactive({
      name:"13",
      valye:0
    })
    watch(

    ),
    watchEffect()
    return ()=>{
      return (
        <div>
          <font-icon Type="share"></font-icon>
        </div>
      )
    }
  }
 })

export {
  hello
}