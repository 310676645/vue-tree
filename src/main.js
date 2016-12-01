import Vue from 'vue';
import Mint from 'mint-ui';
import Tree from './components/Tree.vue';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
Vue.component(Mint);
new Vue({
  data(){
    return {
      value: [],
      model: [
        {
          "id": "83",
          "pid": "0",
          "title": "顶级",
          "sort": "50",
          "_child": [
            {
              "id": "86",
              "pid": "83",
              "title": "一级1",
              "sort": "1",
              "_child": [
                {
                  "id": "90",
                  "pid": "86",
                  "title": "二级1",
                  "sort": "1"
                },
                {
                  "id": "91",
                  "pid": "86",
                  "title": "二级2",
                  "sort": "2"
                },
                {
                  "id": "89",
                  "pid": "86",
                  "title": "二级3",
                  "sort": "3",
                  "_child": [
                    {
                      "id": "100",
                      "pid": "89",
                      "title": "三级1",
                      "sort": "1"
                    },
                    {
                      "id": "101",
                      "pid": "89",
                      "title": "三级2",
                      "sort": "2"
                    },
                    {
                      "id": "99",
                      "pid": "89",
                      "title": "三级3",
                      "sort": "3"
                    }
                  ]
                }
              ]
            },
            {
              "id": "88",
              "pid": "83",
              "title": "一级2",
              "sort": "2",
              "_child": [
                {
                  "id": "94",
                  "pid": "88",
                  "title": "二级1",
                  "sort": "1",
                  "_child": [
                    {
                      "id": "103",
                      "pid": "94",
                      "title": "三级1",
                      "sort": "1",
                      "_child": [
                        {
                          "id": "105",
                          "pid": "103",
                          "title": "四级1",
                          "sort": "1"
                        },
                        {
                          "id": "106",
                          "pid": "103",
                          "title": "四级2",
                          "sort": "2"
                        },
                        {
                          "id": "104",
                          "pid": "103",
                          "title": "四级3",
                          "sort": "3"
                        }
                      ]
                    },
                    {
                      "id": "102",
                      "pid": "94",
                      "title": "三级2",
                      "sort": "2"
                    }
                  ]
                },
                {
                  "id": "93",
                  "pid": "88",
                  "title": "二级2",
                  "sort": "2"
                },
                {
                  "id": "95",
                  "pid": "88",
                  "title": "二级3",
                  "sort": "3"
                },
                {
                  "id": "92",
                  "pid": "88",
                  "title": "二级4",
                  "sort": "4"
                }
              ]
            },
            {
              "id": "87",
              "pid": "83",
              "title": "一级3",
              "sort": "3",
              "_child": [
                {
                  "id": "96",
                  "pid": "87",
                  "title": "二级1",
                  "sort": "1"
                },
                {
                  "id": "98",
                  "pid": "87",
                  "title": "二级2",
                  "sort": "2"
                },
                {
                  "id": "97",
                  "pid": "87",
                  "title": "二级3",
                  "sort": "3"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  el: '#app',
  components: {
    Tree
  }
});
