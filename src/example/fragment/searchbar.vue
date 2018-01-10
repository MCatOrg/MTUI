<template>
  <div>
   <mt-header :data="headerData"></mt-header>
      <div class="mtui-search-bar" id="searchBar">
        <form class="mtui-search-bar__form">
            <div class="mtui-search-bar__box">
                <i class="mtui-icon-search"></i>
                <input type="search" class="mtui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                <a href="javascript:" class="mtui-icon-clear" id="searchClear"></a>
            </div>
            <label class="mtui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <i class="mtui-icon-search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="mtui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>
       <div class="mtui-cells searchbar-result" id="searchResult">
            <div class="mtui-cell mtui-cell_access">
                <div class="mtui-cell__bd mtui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
            <div class="mtui-cell mtui-cell_access">
                <div class="mtui-cell__bd mtui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
            <div class="mtui-cell mtui-cell_access">
                <div class="mtui-cell__bd mtui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
            <div class="mtui-cell mtui-cell_access">
                <div class="mtui-cell__bd mtui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
  import $ from "webpack-zepto";
  import mtHeader from '../component/header'
  export default{
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: '搜索导航',
                info: 'searchbar'
            }
        }
    },
    mounted (){
        $(function(){
        var $searchBar = $('#searchBar'),
            $searchResult = $('#searchResult'),
            $searchText = $('#searchText'),
            $searchInput = $('#searchInput'),
            $searchClear = $('#searchClear'),
            $searchCancel = $('#searchCancel');
            hideSearchResult();
        function hideSearchResult(){
            $searchResult.hide();
            $searchInput.val('');
        }
        function cancelSearch(){
            hideSearchResult();
            $searchBar.removeClass('mtui-search-bar_focusing');
            $searchText.show();
        }

        $searchText.on('click', function(){
            $searchBar.addClass('mtui-search-bar_focusing');
            $searchInput.focus();
        });
        $searchInput
            .on('blur', function () {
                if(!this.value.length) cancelSearch();
            })
            .on('input', function(){
                if(this.value.length) {
                    $searchResult.show();
                } else {
                    $searchResult.hide();
                }
            })
        ;
        $searchClear.on('click', function(){
            hideSearchResult();
            $searchInput.focus();
        });
        $searchCancel.on('click', function(){
            cancelSearch();
            $searchInput.blur();
        });
    });
    }
  }
</script>

