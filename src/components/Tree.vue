<template>
    <div class="checklist-tree">
        <template v-if="model && isObject(model)">
            <mt-checklist
                @change="checklistChange()"
                v-model="currentValue"
                :options="[{label:model.title,value:model.id}]">
            </mt-checklist>
            <tree
                v-if="model._child"
                v-model="currentValue"
                :model="model._child">
            </tree>
        </template>
        <div class="checklist-tree__children">
            <template v-if="model && isArray(model)" v-for="(item, index) in model">
                <mt-checklist
                    v-model="currentValue"
                    @change="checklistChange(index)"
                    :options="[{label:item.title,value:item.id}]">
                </mt-checklist>
                <tree
                    v-if="item._child"
                    v-model="currentValue"
                    :model="item._child">
                </tree>
            </template>
        </div>
    </div>
</template>
<style>
    .checklist-tree{
        background: #fff;
    }
    .checklist-tree .mint-cell{
        background: none;
    }
    .checklist-tree__children{
        padding-left: 20px;
    }
</style>
<script>
    export default{
        name: 'tree',
        props: {
            value: {
                type: Array,
                required: true
            },
            model: {
                type: [Array,Object]
            }
        },
        data(){
            return {
                currentValue: this.value,
                options: []
            }
        },
        methods: {
            isArray(val) {
                return Array.isArray(val);
            },
            isObject(val) {
                return val.constructor.toString().indexOf('Object') > 0 ? true : false;
            },
            eachChildModel(model) {
                let idList = [];
                let child = model._child;
                if(this.isArray(child)) {
                    for(let i = 0, len = child.length; i < len; i++) {
                        idList.push(child[i].id);
                        let modelChild = child[i]._child;
                        if(modelChild) {
                            idList.push(...this.eachChildModel(child[i]));
                        }
                    }
                }
                if(this.isArray(model)) {
                    for(let i = 0, len = model.length; i < len; i++) {
                        idList.push(...this.eachChildModel(model[i]));
                    }
                }
                return idList;
            },
            checklistChange(index) {
                let selfId;
                let model = this.model;
                let currentValue = this.currentValue;
                if(this.isArray(model)) {
                    selfId = model[index].id;
                } else if(this.isObject(model)) {
                    selfId = model.id;
                }
                let isCheck = this.value.indexOf(selfId) != -1 ? true : false;
                let checkList = this.eachChildModel(model[index]);
                for(let i = 0, len = checkList.length; i < len; i++){
                    let checkListIndex = currentValue.indexOf(checkList[i]);
                    if(isCheck && checkListIndex == -1){
                        currentValue.push(checkList[i]);
                    } else if(!isCheck) {
                        currentValue.splice(checkListIndex,1);
                    }
                }
            }
        },
        watch: {
            currentValue(val) {
                this.$emit('input', val);
            },
            value(val) {
                this.currentValue = val;
            }
        }
    }
</script>