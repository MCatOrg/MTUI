<template>
    <div id="mtButton">
        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">1.填充按钮：</h2>
            <div class="mt-btn_list">
                <mtui-button @click="btnClick">默认按钮</mtui-button>
                <mtui-button type="primary" @click="btnClick">主要按钮</mtui-button>
                <mtui-button type="success" @click="btnClick">成功按钮</mtui-button>
                <mtui-button type="info" @click="btnClick">信息按钮</mtui-button>
                <mtui-button type="warning" @click="btnClick">警告按钮</mtui-button>
                <mtui-button type="danger" @click="btnClick">危险按钮</mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">2.非填充按钮（朴素按钮）：</h2>
            <div class="mt-btn_list">
                <mtui-button plain @click="btnClick">朴素按钮</mtui-button>
                <mtui-button type="primary" :plain="true" @click="btnClick">主要按钮</mtui-button>
                <mtui-button type="success" plain @click="btnClick">成功按钮</mtui-button>
                <mtui-button type="info" plain @click="btnClick">信息按钮</mtui-button>
                <mtui-button type="warning" plain @click="btnClick">警告按钮</mtui-button>
                <mtui-button type="danger" plain @click="btnClick">危险按钮</mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">3.圆角填充按钮：</h2>
            <div class="mt-btn_list">
                <mtui-button round @click="btnClick">圆角按钮</mtui-button>
                <mtui-button type="primary" :round="true" @click="btnClick">主要按钮</mtui-button>
                <mtui-button type="success" round @click="btnClick">成功按钮</mtui-button>
                <mtui-button type="info" round @click="btnClick">信息按钮</mtui-button>
                <mtui-button type="warning" round @click="btnClick">警告按钮</mtui-button>
                <mtui-button type="danger" round @click="btnClick">危险按钮</mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">4.圆角非填充按钮（圆角朴素按钮）：</h2>
            <div class="mt-btn_list">
                <mtui-button plain round @click="btnClick">圆角按钮</mtui-button>
                <mtui-button type="primary" plain round @click="btnClick">主要按钮</mtui-button>
                <mtui-button type="success" plain round @click="btnClick">成功按钮</mtui-button>
                <mtui-button type="info" plain round @click="btnClick">信息按钮</mtui-button>
                <mtui-button type="warning" plain round @click="btnClick">警告按钮</mtui-button>
                <mtui-button type="danger" plain round @click="btnClick">危险按钮</mtui-button>
            </div>
        </div>
        
        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">5.圆形填充按钮（适用于纯图标按钮）：</h2>
            <div class="mt-btn_list">
                <mtui-button circle icon="mtui-icon-businTime" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="primary" :circle="true" icon="mtui-icon-revise" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="success" circle icon="mtui-icon-select" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="info" circle icon="mtui-icon-leaveMessage" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="warning" circle icon="mtui-icon-tip" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="danger" circle icon="mtui-icon-delete" :label="false" @click="btnClick"></mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">6.圆形非填充按钮（适用于纯图标按钮）：</h2>
            <div class="mt-btn_list">
                <mtui-button circle plain icon="mtui-icon-businTime" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="primary" :circle="true" plain icon="mtui-icon-revise" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="success" circle plain icon="mtui-icon-select" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="info" circle plain icon="mtui-icon-leaveMessage" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="warning" circle plain icon="mtui-icon-tip" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="danger" circle plain icon="mtui-icon-delete" :label="false" @click="btnClick"></mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">7.文字按钮：</h2>
            <div class="mt-btn_list">
                <mtui-button type="text" @click="btnClick">文字按钮</mtui-button>
                <mtui-button type="text" icon="mtui-icon-revise" @click="btnClick">编辑按钮</mtui-button>
                <mtui-button class="btn-text_color" type="text" icon="mtui-icon-delete" right @click="btnClick">删除按钮</mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">8.图标按钮</h2>
            <div class="mt-btn_list">
                <mtui-button icon="mtui-icon-businTime" :label="false" @click="btnClick"></mtui-button>
                <mtui-button type="primary" icon="mtui-icon-revise" @click="btnClick">编辑</mtui-button>
                <mtui-button type="success" icon="mtui-icon-scan2" plain @click="btnClick">扫一扫</mtui-button>
                <mtui-button type="info" icon="mtui-icon-leaveMessage" round @click="btnClick">留言区</mtui-button>
                <mtui-button type="warning" icon="mtui-icon-share" plain right round @click="btnClick">分享</mtui-button>
                <mtui-button type="danger" icon="mtui-icon-delete" right @click="btnClick">删除</mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">9.禁用状态：</h2>
            <div class="mt-btn_list">
                <mtui-button disabled @click="btnClick">默认按钮</mtui-button>
                <mtui-button type="primary" :disabled="true" @click="btnClick">主要按钮</mtui-button>
                <mtui-button type="success" disabled @click="btnClick">成功按钮</mtui-button>
                <mtui-button type="info" disabled @click="btnClick">信息按钮</mtui-button>
                <mtui-button type="warning" disabled @click="btnClick">警告按钮</mtui-button>
                <mtui-button type="danger" disabled @click="btnClick">危险按钮</mtui-button>

                <mtui-button plain disabled @click="btnClick">朴素按钮</mtui-button>
                <mtui-button type="primary" :plain="true" disabled @click="btnClick">主要按钮</mtui-button>
                <mtui-button type="success" plain disabled @click="btnClick">成功按钮</mtui-button>
                <mtui-button type="info" plain disabled @click="btnClick">信息按钮</mtui-button>
                <mtui-button type="warning" plain disabled @click="btnClick">警告按钮</mtui-button>
                <mtui-button type="danger" plain disabled @click="btnClick">危险按钮</mtui-button>

                <mtui-button type="text" disabled icon="mtui-icon-revise" @click="btnClick">文字按钮</mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">10.加载中：</h2>
            <div class="mt-btn_list">
                <mtui-button :loading="true" loadingColor="#c0c4cc" @click="btnClick">加载中</mtui-button>
                <mtui-button type="primary" :loading="true" @click="btnClick">加载中</mtui-button>
                <mtui-button type="primary" :loading="true" plain @click="btnClick">加载中</mtui-button>
                <mtui-button type="success" :loading="true" round @click="btnClick">加载中</mtui-button>
                <mtui-button type="success" :loading="true" plain round @click="btnClick">加载中</mtui-button>
            </div>
            <div class="mt-btn_list">
                <mtui-button loading loadingType="dot" :loadingSize="0.6" @click="btnClick">加载中</mtui-button>
                <mtui-button type="info" loading loadingType="dot" :loadingSize="0.6" @click="btnClick">加载中</mtui-button>
                <mtui-button type="info" loading loadingType="dot" :loadingSize="0.6" plain @click="btnClick">加载中</mtui-button>
                <mtui-button type="warning" loading loadingType="dot" :loadingSize="0.6" round @click="btnClick">加载中</mtui-button>
                <mtui-button type="warning" loading loadingType="dot" :loadingSize="0.6" plain round @click="btnClick">加载中</mtui-button>
            </div>
            <div class="mt-btn_list">
                <mtui-button loading loadingType="rectangle" loadingColor="#c0c4cc" :loadingSize="0.4" plain @click="btnClick">加载中</mtui-button>
                <mtui-button type="success" loading loadingType="rectangle" :loadingSize="0.4" @click="btnClick">加载中</mtui-button>
                <mtui-button type="success" loading loadingType="rectangle" :loadingSize="0.4" plain @click="btnClick">加载中</mtui-button>
                <mtui-button type="danger" loading loadingType="rectangle" :loadingSize="0.4" round @click="btnClick">加载中</mtui-button>
                <mtui-button type="danger" loading loadingType="rectangle" :loadingSize="0.4" plain round @click="btnClick">加载中</mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">11.按钮尺寸：</h2>
            <div class="mt-btn_list">
                <mtui-button class="mt-btn_size" @click="btnClick">默认按钮</mtui-button>
                <mtui-button type="primary" size="medium" @click="btnClick">中等按钮</mtui-button>
                <mtui-button type="primary" plain size="small" @click="btnClick">小型按钮</mtui-button>
                <mtui-button size="mini" @click="btnClick">超小按钮</mtui-button>

                <mtui-button class="mt-btn_size" icon="mtui-icon-renew" round @click="btnClick">默认按钮</mtui-button>
                <mtui-button type="primary" size="medium" icon="mtui-icon-renew" round @click="btnClick">中等按钮</mtui-button>
                <mtui-button type="primary" plain size="small" icon="mtui-icon-renew" round @click="btnClick">小型按钮</mtui-button>
                <mtui-button size="mini" icon="mtui-icon-renew" round @click="btnClick">超小按钮</mtui-button>
            </div>
        </div>

        <div class="mt-btn_wrapper">
            <h2 class="mt-btn_title">12.自定义颜色：</h2>
            <div class="mt-btn_list">
                <mtui-button @click="btnClick">默认按钮</mtui-button>
                <mtui-button bgColor="rgb(128,0,128)" borderColor="rgb(128,0,128)" type="primary" @click="btnClick">紫色按钮</mtui-button>
                <mtui-button bgColor="#FF1493" borderColor="#FF1493" type="success" @click="btnClick">深粉色按钮</mtui-button>
                <mtui-button bgColor="#008B8B" type="info" round @click="btnClick">深青色按钮</mtui-button>
                <mtui-button bgColor="#FFFF00" textColor="#FF00FF" type="warning" icon="mtui-icon-revise" round @click="btnClick">黄色按钮</mtui-button>
                <mtui-button bgColor="#FF8C00" type="danger" round @click="btnClick">橙色按钮</mtui-button>
                <mtui-button bgColor="#008B8B" borderColor="#008B8B" type="info" round disabled @click="btnClick">深青色按钮</mtui-button>
                <mtui-button bgColor="#FFFF00" borderColor="#FFFF00" textColor="#F0F" type="warning" icon="mtui-icon-revise" disabled round @click="btnClick">黄色按钮</mtui-button>
                <mtui-button bgColor="#FF8C00" borderColor="#FF8C00" type="danger" round disabled @click="btnClick">橙色按钮</mtui-button>
                <mtui-button round loading loadingColor="#c0c4cc" @click="btnClick">默认按钮</mtui-button>
                <mtui-button bgColor="#008B8B" type="info" round loading @click="btnClick">深青色按钮</mtui-button>
                <mtui-button bgColor="#FFFF00" textColor="#F0F" type="warning" loading round loadingColor="rgba(255, 0, 255, 0.6)" @click="btnClick">黄色按钮</mtui-button>
                <mtui-button bgColor="#FF8C00" type="danger" round loading @click="btnClick">橙色按钮</mtui-button>

                <mtui-button plain @click="btnClick">朴素按钮</mtui-button>
                <mtui-button bgColor="rgb(128,0,128)" borderColor="rgb(128,0,128)" textColor="rgb(128,0,128)" type="primary" plain @click="btnClick">紫色按钮</mtui-button>
                <mtui-button bgColor="#FF1493" borderColor="#FF1493" textColor="#FF1493" type="success" plain @click="btnClick">深粉色按钮</mtui-button>
                <mtui-button bgColor="#008B8B" textColor="#008B8B" type="info" plain round @click="btnClick">深青色按钮</mtui-button>
                <mtui-button bgColor="#FFFF00" textColor="#FFD21F" type="warning" plain round @click="btnClick">黄色按钮</mtui-button>
                <mtui-button bgColor="#FF8C00" textColor="FF8C00" type="danger" plain round @click="btnClick">橙色按钮</mtui-button>
                <mtui-button bgColor="#008B8B" borderColor="#008B8B" textColor="#008B8B" type="info" plain round disabled @click="btnClick">深青色按钮</mtui-button>
                <mtui-button bgColor="#FFFF00" borderColor="#FFFF00" textColor="#FFD21F" type="warning" plain round disabled @click="btnClick">黄色按钮</mtui-button>
                <mtui-button bgColor="#FF8C00" borderColor="#FF8C00" textColor="FF8C00" type="danger" plain round disabled @click="btnClick">橙色按钮</mtui-button>
                <mtui-button plain round loading loadingColor="#c0c4cc" loadingType="rectangle" :loadingSize="0.4" @click="btnClick">朴素按钮</mtui-button>
                <mtui-button bgColor="#008B8B" textColor="#008B8B" type="info" plain round loading loadingType="rectangle" :loadingSize="0.4" @click="btnClick">深青色按钮</mtui-button>
                <mtui-button bgColor="#FFFF00" textColor="#FFD21F" type="warning" plain round loading loadingType="rectangle" :loadingSize="0.4" @click="btnClick">黄色按钮</mtui-button>
                <mtui-button bgColor="#FF8C00" textColor="#FF8C00" type="danger" plain round loading loadingType="rectangle" :loadingSize="0.4" @click="btnClick">橙色按钮</mtui-button>
                
                <mtui-button color="#FF8C00" round @click="btnClick">橙色按钮</mtui-button>
                <mtui-button color="#FF8C00" type="primary" round @click="btnClick">橙色按钮</mtui-button>
                <mtui-button bgColor="#FF8C00" round @click="btnClick">橙色按钮</mtui-button>
                <mtui-button borderColor="#FF8C00" type="primary" round @click="btnClick">橙色按钮</mtui-button>
                <mtui-button color="#FF8C00" disabled @click="btnClick">橙色按钮</mtui-button>
                <mtui-button bgColor="#FF8C00" color="#008B8B" type="warning" loading @click="btnClick">橙色按钮</mtui-button>
                <mtui-button bgColor="#FFFF00" color="#FF8C00" textColor="#FF00FF" disabled type="warning" icon="mtui-icon-revise" round @click="btnClick">黄色按钮</mtui-button>

                <mtui-button color="#008B8B" plain round @click="btnClick">默认按钮</mtui-button>
                <mtui-button color="#008B8B" type="info" plain round @click="btnClick">深青色按钮</mtui-button>
                <mtui-button bgColor="#008B8B" type="info" plain round @click="btnClick">深青色按钮</mtui-button>
                <mtui-button bgColor="#008B8B" color="#008B8B" type="info" plain round @click="btnClick">深青色按钮</mtui-button>
                <mtui-button borderColor="#008B8B" type="info" plain round @click="btnClick">深青色按钮</mtui-button>
                <mtui-button borderColor="#008B8B" type="info" disabled plain round @click="btnClick">深青色按钮</mtui-button>
                <mtui-button borderColor="#008B8B" type="info" loading plain round @click="btnClick">深青色按钮</mtui-button>
                <mtui-button borderColor="#008B8B" type="info" loading plain round @click="btnClick">深青色按钮</mtui-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        btnClick() {
            console.log('I am a button');
        }
    }
}
</script>

<style lang="less" scoped>
.mt-btn_wrapper {
    margin-bottom: 0.2rem;
    .mt-btn_title {
        margin-bottom: 0.1rem;
        font-size: 0.28rem;
        font-weight: bold;
    }

    .mt-btn_list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        padding: 0.1rem;
        border: 0.01rem solid #ebebeb;
        border-radius: 0.08rem;
        .mtui-button {
            margin: 0.1rem 0;
        }

        .btn-text_color {
            color: #F56C6C;
        }

        & + .mt-btn_list {
            margin-top: 0.2rem;
        }

        // .mt-btn_size {
        //     width: 3rem;
        //     height: 1rem;
        // }
    }

    @media only screen and (max-width: 321px) {
        .mt-btn_list {
            border-width: 0.02rem;
        }
    }
}
</style>
