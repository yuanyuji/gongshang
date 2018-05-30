import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        themecolor:'C14860'//默认为20a0ff
    },
    mutations:{
        //更新主题颜色
        setThemeColor(state,curcolor){
            this.state.themecolor = curcolor;
        }
    }
});
export default store;