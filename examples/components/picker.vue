<template>
    <div>
        <button @click="picker">picker</button>
        <button @click="dataPicker">dataPicker</button>
    </div>
</template>
<script>
export default {
    methods: {
        picker() {
            this.$Picker([{
                label: '飞机票',
                value: 0
            }, {
                label: '火车票',
                value: 1
            }, {
                label: '的士票',
                value: 2
            },{
                label: '公交票 (disabled)',
                disabled: true,
                value: 3
            }, {
                label: '其他',
                value: 4
            }], {
                onChange: function (result) {
                    console.log(result);
                },
                onConfirm: function (result) {
                    console.log(result);
                },
                search: true,
            })
        },
        dataPicker(){
            this.$datePicker({
                start: 1990,
                end: new Date().getFullYear(),
                onChange: function (result) {
                    console.log(result);
                },
                onConfirm: function (result) {
                    console.log(result);
                }
            })
        }
    },
};
</script>
