/**
 * @class
 * @desc 控件整体思路围绕 selectedIndex 为核心，所有变化都通过 selectedIndex 变化实现
 * @history 为什么叫 nav 最开始的时候我想构建一个tabcontrol 控件，后来我发现 tabs  只属于NAV 的一种so 决定换名字，但是有些东西已经开始使用所以 就留下了 tabList 和 tabItems 
 */
$.widget("aui.nav", {
    widgetEventPrefix: 'nav:',
    //_create
    $nav_ele: null,
    $nav_items: null,
    //_createContent
    $navs_content: [],
    /**
     * _refresh method 中赋值
     * @desc 全部为jQuery 对象
     * @ignore
     */
    $cur_item: null,
    $cur_content: null,
    $selected_item: null,
    $selected_content: null,

    options: {
        /**
         * @desc options
         * @prop {String} type 决定控件类型
         * @prop {String} theme 决定控件主题
         * @prop {String} disabledList 'all' 全部disabled '1 2 3'字符串中包含的index disabled
         * @prop {Number|Bool} visible 当 nav-item 多的时候控制显隐默认值为true 即全部显示
         */
        tabList: new ArrayList,
        theme: 'nav-default',
        type: 'nav-tabs',
        selectedIndex: 0,
        disabledList: "",//  /\d+/g
        visible: 2
    },
    /**
     * create widget 
     * @func _create
    
     */
    _create: function () {

        this.element.append(this._createContent());
        this.$nav_ele = this.element.find('>.nav');
        this.$nav_items = this.element.find('.nav__item');
        if (this.options.visible !== true) {
            this.$navItemsWithoutArrow = $(".nav__item:not(.nav__item--arrow)", this.element);
            this.arrow_left_position = 1;
            this.arrow_right_position = this.options.visible;
            this.$nav_items.slice(this.options.visible+1,-1).toggleClass('none',true);           
        }

        this._on({
            "click .nav__item:not(.nav__item--arrow)": function (event) {
                var cur_activedom = $(event.currentTarget),
                    index = cur_activedom.index(),
                    isDisabled = false,
                    disabledList = this.options.disabledList;

                if (disabledList.toLowerCase() == 'all') {
                    isDisabled = true;
                } else {
                    try {
                        isDisabled = disabledList.match(/\d+/g).indexOf(index.toString()) > -1;
                    } catch (error) {
                        //   isDisabled = false;
                    }

                }


                isDisabled ?
                    null :
                    this._setOption("selectedIndex", index);
                //阻止锚点默认行为
                event.preventDefault();

            },
            "click .nav__item--arrow": function (event) {
                var cur_activedom = $(event.currentTarget),
                    direction = !!cur_activedom.index();//true + false -

                if (direction && this.arrow_right_position < this.options.tabList.length - this.options.visible ||
                    !direction && this.arrow_left_position > 1
                ) {
                    //true + right |false - left
                    if (direction) {
                        this.arrow_left_position++;
                        this.arrow_right_position++;
                    } else {
                        this.arrow_left_position--;
                        this.arrow_right_position--;
                    }

                    this._shuffle(direction);
                }



            },
            /**
             * @desc 调用ArrayList 方法重置tabItems
             * @interface
             * @param {Event}
             * @param {planObject}->{method:'methodName',options:[arguments]}
             * @demo $(":aui-nav").trigger('nav:invoke',{method:'push',options:{item:new $$.Nav.TabsItem('#tab1', 'tab1')}})
             * @demo $(":aui-nav").trigger('nav:invoke',{method:'insert',options:{item:new $$.Nav.TabsItem('#tab1', 'tab1')}})
             * @demo $(":aui-nav").trigger('nav:invoke',{method:'remove',options:{index:1}});
             */
            "nav:invoke": function (event, planObject) {

                try {
                    var method = planObject.method,//{string}
                        options = planObject.options;//{Object}
                    this._invokeList(method, options);
                } catch (error) {
                    console.log(error);
                }

            }
        });
        this.options.tabList.active = false;
        this._refresh();


    },
    /**
     * set options
     * @func 
     * @memberof Nav#
     */
    _setOption: function (key, value) {
        var oldValue = this.options[key];
        var newValue = value;
        switch (key) {
            case 'selectedIndex': {
                if (oldValue != newValue) {
                    this._trigger("selectedindexchange", null, [oldValue, newValue]);
                } else {
                    return;
                }

                $.Widget.prototype._setOption.apply(this, arguments);
                this._refresh();
                break;
            }
            case 'tabList': {
                if (this.options.tabList.active) {

                    $.Widget.prototype._setOption.apply(this, arguments);
                    this._resetNav();
                    this._refresh();
                } else {
                    return;
                }
                this.options.tabList.active = false;
                break;
            }
            default:
                $.Widget.prototype._setOption.apply(this, arguments);

        }
    }
   
   
})

  
