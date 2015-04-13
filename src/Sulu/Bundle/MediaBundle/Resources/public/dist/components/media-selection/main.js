define(["sulumedia/collection/collections","sulumedia/model/collection"],function(a,b){"use strict";var c={eventNamespace:"sulu.media-selection",thumbnailKey:"thumbnails",thumbnailSize:"50x50",resultKey:"media",dataAttribute:"media-selection",dataDefault:{displayOption:"top",ids:[]},hideConfigButton:!0,translations:{noContentSelected:"media-selection.nomedia-selected",addImages:"media-selection.add-images",choose:"public.choose",collections:"media-selection.collections",upload:"media-selection.upload-new",collection:"media-selection.upload-to-collection",createNewCollection:"media-selection.create-new-collection",newCollection:"media-selection.new-collection"}},d={lastVisitedCollectionKey:"last-visited-collection",listViewStorageKey:"mediaOverlayListView"},e=function(){return g.call(this,"record-selected")},f=function(){return g.call(this,"record-deselected")},g=function(a){return this.options.eventNamespace+"."+(this.options.instanceName?this.options.instanceName+".":"")+a},h={mediaSelection:function(a){return['<div class="media-selection-overlay">','   <div class="media-selection-overlay-navigation-container pull-left"></div>','   <div class="media-selection-overlay-content">','       <div class="fa-times media-selection-overlay-close"></div>','       <div class="media-selection-overlay-dropzone-container"></div>','       <div class="media-selection-overlay-toolbar-container"></div>','       <div class="media-selection-overlay-content-area">','           <div class="media-selection-overlay-content-title">'+a.contentDefaultTitle+"</div>",'           <div class="media-selection-overlay-datagrid-container"></div>',"       </div>","   </div>","</div>"].join("")},contentItem:function(a,b){return['   <img src="',b["50x50"],'"/>','   <span class="title">',a,"</span>"].join("")}},i=function(a){return"#"+this.options.ids[a]},j=function(){var a=this.$find(i.call(this,"loader"));a.length&&this.sandbox.start([{name:"loader@husky",options:{el:a,size:"100px",color:"#cccccc"}}])},k=function(){this.sandbox.stop(i.call(this,"loader"))},l=function(){this.sandbox.dom.scrollAnimate(this.sandbox.dom.height(".media-selection-overlay-datagrid-container"),".media-selection-overlay-content")},m=function(a){for(var b=-1,c=a.length;++b<c;)a[b].selected=!0;this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".records.add",a,l.bind(this)),this.sandbox.emit("husky.data-navigation."+this.options.instanceName+".collections.reload")},n=function(a){var b,c=this.sandbox.translate("media-selection.overlay.all-images");a?(b=a.id,c=a.title,this.sandbox.emit("husky.toolbar.media-selection-ovelay."+this.options.instanceName+".item.enable","add"),this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".enable")):(this.sandbox.emit("husky.toolbar.media-selection-ovelay."+this.options.instanceName+".item.disable","add"),this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".disable")),this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".url.update",{collection:b,page:1}),p.call(this,b),this.$el.find(".media-selection-overlay-content-title").html(c)},o=function(){this.sandbox.on(this.DISPLAY_OPTION_CHANGED(),function(a){w.call(this,{displayOption:a},!1)},this),this.sandbox.on(this.DATA_RETRIEVED(),function(a){var b=[];this.sandbox.util.foreach(a,function(a){b.push(a.id)}.bind(this)),w.call(this,{ids:b},!1)},this),this.sandbox.on("husky.tabs.overlay."+this.options.instanceName+".add.initialized",function(){j.call(this),this.collections.fetchSorted("title",{success:function(a){this.collectionArray=a.toJSON(),k.call(this),r.call(this),s.call(this)}.bind(this)})}.bind(this)),this.sandbox.on("husky.overlay."+this.options.instanceName+".add.opened",function(){this.gridGroupDeprecated===!0&&(q.call(this),this.gridGroupDeprecated=!1)}.bind(this)),this.sandbox.on("sulu.grid-group."+this.options.instanceName+".height-changed",function(){this.sandbox.emit("husky.overlay."+this.options.instanceName+".add.set-position")}.bind(this)),this.sandbox.on("sulu.grid-group."+this.options.instanceName+".initialized",function(){this.sandbox.emit("husky.overlay."+this.options.instanceName+".add.set-position")}.bind(this)),this.sandbox.on("husky.select."+this.options.instanceName+".selected.item",p.bind(this)),this.sandbox.on("sulu.grid-group."+this.options.instanceName+".record-selected",function(a){this.sandbox.emit(e.call(this),a)}.bind(this)),this.sandbox.on("sulu.grid-group."+this.options.instanceName+".record-deselected",function(a){this.sandbox.emit(f.call(this),a)}.bind(this)),this.sandbox.on("husky.data-navigation."+this.options.instanceName+".select",n.bind(this)),this.sandbox.on("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.table",function(){this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".view.change","table"),this.sandbox.sulu.saveUserSetting(d.listViewStorageKey,"table")}.bind(this)),this.sandbox.on("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.thumbnail-small",function(){this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".view.change","thumbnail",{large:!1}),this.sandbox.sulu.saveUserSetting(d.listViewStorageKey,"thumbnailSmall")}.bind(this)),this.sandbox.on("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.thumbnail-large",function(){this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".view.change","thumbnail",{large:!0}),this.sandbox.sulu.saveUserSetting(d.listViewStorageKey,"thumbnailLarge")}.bind(this)),this.sandbox.on("sulu.header.back",function(){this.sandbox.emit("sulu.media.collections.list")}.bind(this)),this.sandbox.on("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".files-added",function(a){this.sandbox.emit("sulu.labels.success.show","labels.success.media-upload-desc","labels.success"),m.call(this,a)}.bind(this)),this.sandbox.on("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".add",function(){this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".open-data-source")}.bind(this)),this.sandbox.on("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".item.select",function(a){var b=this.getData(),c=b.ids.indexOf(a);c>-1||(b.ids.push(a),this.setData(b),q.call(this))}.bind(this)),this.sandbox.on("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".item.deselect",function(a){var b=this.getData(),c=b.ids.indexOf(a);c>-1&&b.ids.splice(c,1),this.setData(b),q.call(this)}.bind(this)),this.sandbox.on("husky.overlay.dropzone-media-selection-ovelay."+this.options.instanceName+".opened",function(){this.$el.find(".media-selection-overlay-container").addClass("dropzone-overlay-opened")}.bind(this)),this.sandbox.on("husky.overlay.dropzone-media-selection-ovelay."+this.options.instanceName+".closed",function(){this.$el.find(".media-selection-overlay-container").removeClass("dropzone-overlay-opened")}.bind(this)),this.sandbox.on("husky.overlay."+this.options.instanceName+".add.opened",function(){var a=this.getData().ids||[];this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".selected.update",a)}.bind(this))},p=function(a){this.uploadCollection=a,this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".change-url","/admin/api/media?collection="+a)},q=function(){var a=this.getData();this.sandbox.emit("sulu.grid-group."+this.options.instanceName+".reload",{data:this.collectionArray,preselected:a.ids})},r=function(){var a,b={},c=this.getData();""!=this.options.types?(a="filterByTypes",b={types:this.options.types}):a="all",this.sandbox.start([{name:"grid-group@suluadmin",options:{data:this.collectionArray,el:this.sandbox.dom.find(i.call(this,"gridGroup")),instanceName:this.options.instanceName,gridUrl:a,urlParameter:b,preselected:c.ids,resultKey:this.options.resultKey,dataGridOptions:{view:"table",viewOptions:{table:{excludeFields:["id"],showHead:!1,cssClass:"minimal"}},pagination:!1,matchings:[{name:"id"},{name:"thumbnails",translation:"thumbnails",type:"thumbnails"},{name:"title",translation:"title"}]}}}])},s=function(){this.sandbox.start([{name:"dropzone@husky",options:{el:i.call(this,"dropzone"),url:"/admin/api/media?collection="+this.uploadCollection,method:"POST",paramName:"fileVersion",showOverlay:!1,instanceName:"media-selection-ovelay."+this.options.instanceName,afterDropCallback:t.bind(this),keepFilesAfterSuccess:!0}}])},t=function(){var a=this.sandbox.data.deferred();return"new"===this.uploadCollection?this.newCollectionId?(this.uploadCollection=this.newCollectionId,p.call(this,this.uploadCollection),a.resolve()):(this.newCollection.set({title:u.call(this)}),this.newCollection.save(null,{success:function(b){b=b.toJSON(),this.newCollectionId=b.id,p.call(this,b.id),this.collectionArray.push(b),a.resolve()}.bind(this),error:function(){this.sandbox.logger.log("Error while saving collection")}.bind(this)})):a.resolve(),a.promise()},u=function(){var a=this.sandbox.translate(this.options.translations.newCollection),b=0;return this.sandbox.util.foreach(this.collectionArray,function(c){-1!==c.title.indexOf(a)&&b++}.bind(this)),b>0&&(a=a+" ("+b+")"),a},v=function(){var a=this.sandbox.dom.createElement("<div/>");this.sandbox.dom.append(this.$el,a),this.sandbox.start([{name:"overlay@husky",options:{triggerEl:this.$addButton,draggable:!0,dragTrigger:".media-selection-overlay-navigation-container",removeOnClose:!1,el:a,container:this.$el,cssClass:"media-selection-overlay-container",instanceName:this.options.instanceName+".add",skin:"wide",supportKeyInput:!1,slides:[{title:this.sandbox.translate(this.options.translations.addImages),data:h.mediaSelection({contentDefaultTitle:this.sandbox.translate("media-selection.overlay.all-images")})}]}}]),this.sandbox.once("husky.overlay."+this.options.instanceName+".add.opened",function(){this.$el.on("click",".media-selection-overlay-close",function(){this.sandbox.emit("husky.overlay."+this.options.instanceName+".add.close")}.bind(this)),this.sandbox.start([{name:"data-navigation@husky",options:{el:this.$el.find(".media-selection-overlay-navigation-container"),resultKey:"collections",showAddButton:!1,rootUrl:"/admin/api/collections",url:"/admin/api/collections",nameKey:"title",instanceName:this.options.instanceName,globalEvents:!1}}]),this.sandbox.sulu.initListToolbarAndList.call(this,"mediaOverlay",[{name:"id",translation:"public.id",disabled:!0,"default":!1,sortable:!0,type:"",width:"50px",minWidth:"",editable:!1,"class":""},{name:"thumbnails",translation:"media.media.thumbnails",disabled:!1,"default":!0,sortable:!0,type:"thumbnails",width:"",minWidth:"",editable:!1,"class":""},{name:"title",translation:"public.title",disabled:!1,"default":!1,sortable:!0,type:"title",width:"",minWidth:"",editable:!1,"class":""},{name:"size",translation:"media.media.size",disabled:!1,"default":!0,sortable:!0,type:"bytes",width:"",minWidth:"",editable:!1,"class":""}],{el:this.$el.find(".media-selection-overlay-toolbar-container"),instanceName:"media-selection-ovelay."+this.options.instanceName,template:[{id:"add",icon:"plus-circle",disabled:!0,callback:function(){this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".open-data-source")}.bind(this)},{id:"change",icon:"th-large",itemsOption:{markable:!0},items:[{id:"small-thumbnails",title:this.sandbox.translate("sulu.list-toolbar.small-thumbnails"),callback:function(){this.sandbox.emit("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.thumbnail-small")}.bind(this)},{id:"big-thumbnails",title:this.sandbox.translate("sulu.list-toolbar.big-thumbnails"),callback:function(){this.sandbox.emit("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.thumbnail-large")}.bind(this)},{id:"table",title:this.sandbox.translate("sulu.list-toolbar.table"),callback:function(){this.sandbox.emit("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.table")}.bind(this)}]}],inHeader:!1},{el:this.$el.find(".media-selection-overlay-datagrid-container"),url:"/admin/api/media",view:"thumbnail",resultKey:"media",instanceName:"media-selection-ovelay."+this.options.instanceName,preselected:this.getData().ids,viewOptions:{table:{fullWidth:!1,rowClickSelect:!0},thumbnail:{large:!1,unselectOnBackgroundClick:!1}},paginationOptions:{dropdown:{verticalAlignment:"top"}}}),this.sandbox.start([{name:"dropzone@husky",options:{el:this.$el.find(".media-selection-overlay-dropzone-container"),url:"/admin/api/media",method:"POST",paramName:"fileVersion",instanceName:"media-selection-ovelay."+this.options.instanceName,dropzoneEnabled:!1,cancelUploadOnOverlayClick:!0}}])}.bind(this))},w=function(a,b){var c=this.getData();for(var d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);this.setData(c,b)};return{type:"itembox",initialize:function(){this.options=this.sandbox.util.extend(!0,{},c,this.options);var d=this.getData();this.collections=new a,this.newCollection=new b,this.collectionArray=null,this.newCollectionId=null,this.gridGroupDeprecated=!1,this.options.ids={container:"media-selection-"+this.options.instanceName+"-container",addButton:"media-selection-"+this.options.instanceName+"-add",configButton:"media-selection-"+this.options.instanceName+"-config",displayOption:"media-selection-"+this.options.instanceName+"-display-option",content:"media-selection-"+this.options.instanceName+"-content",chooseTab:"media-selection-"+this.options.instanceName+"-choose-tab",uploadTab:"media-selection-"+this.options.instanceName+"-upload-tab",gridGroup:"media-selection-"+this.options.instanceName+"-grid-group",loader:"media-selection-"+this.options.instanceName+"-loader",collectionSelect:"media-selection-"+this.options.instanceName+"-collection-select",dropzone:"media-selection-"+this.options.instanceName+"-dropzone"},this.uploadCollection=null,o.call(this),this.render(),d.displayOption&&this.setDisplayOption(d.displayOption),v.call(this)},isDataEmpty:function(a){return this.sandbox.util.isEmpty(a.ids)},getUrl:function(a){var b=-1===this.options.url.indexOf("?")?"?":"&";return[this.options.url,b,this.options.idsParameter,"=",(a.ids||[]).join(",")].join("")},getItemContent:function(a){return h.contentItem(a.title,a.thumbnails)},sortHandler:function(a){var b=this.getData();b.ids=a,this.setData(b,!1)},removeHandler:function(a){for(var b=this.getData(),c=-1,d=b.ids.length;++c<d;)if(b.ids[c]===a){b.ids.splice(b.ids.indexOf(a),1);break}this.setData(b,!1)}}});