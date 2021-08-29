<template>
  <a-table :pagination="false" :columns="columns" :data-source="dataSource" bordered>
    <template #customTite>
          <div style="cursor:pointer"  @click="changeTitle">
            {{chartTitle}}
          </div>
      </template>

    <template v-for="col in ['name', 'value']" #[col]="{ text, record }" :key="col">
      <div>
        <a-input
          v-if="editableData[record.key]"
          v-model:value="editableData[record.key][col]"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template #operation="{ record }">
      <div class="editable-row-operations">
        <span v-if="editableData[record.key]">
          <a @click="save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
  <a-popconfirm  v-if="dataSource.length > 1" title="确定删除最后一行吗" @confirm="onDelete">
      <a-button   style="width:50%;" ><i class="el-icon-minus"></i></a-button>
  </a-popconfirm>
  <a-button v-else class="editable-add-btn" @click="handleAdd" style="width: 100%;"><i class="el-icon-plus" style=""></i></a-button>
  <a-button v-if="dataSource.length > 1" class="editable-add-btn" @click="handleAdd" style="width: 50%; "><i class="el-icon-plus" style=""></i></a-button>
  <i @click="$router.push('/edit/upload')" index="1" class="el-icon-upload upload"></i><!-- <upload/> -->
</template>
<script>
import { cloneDeep } from 'lodash-es';
import { defineComponent, reactive, ref } from 'vue';
import { useStore } from 'vuex'
import { ElMessageBox } from 'element-plus';
import { ElMessage } from 'element-plus';
import { cahrtTemplate } from '@/common/chart/chart'

export default defineComponent({
  setup() {
    const store = useStore()
    const columns = [
      {
        dataIndex: 'name',
        slots: {
          title:'customTite',
          customRender: 'name',
        },
      },
      {
        title: 'value',
        width:'40%',
        dataIndex: 'value',
        slots: {
          customRender: 'value',
        },
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        width:'20%',
        slots: {
          customRender: 'operation',
        },
      },
      ];
    
    const data = [
      {key:'0', value: 1048, name: '搜索引擎'},
      {key:'1', value: 735, name: '直接访问'},
      {key:'2', value: 580, name: '邮件营销'},
      {key:'3', value: 484, name: '联盟广告'},
      {key:'4', value: 300, name: '视频广告'}];
    
    const chartTitle = ref('某站用户访问来源')

    const dataSource = ref(data);

    const editableData = reactive({});

    const edit = key => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };

    const save = key => {
      console.log(key)
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      Object.assign(cahrtTemplate[store.state.preChartType].series[0].data.filter(item => key === item.key)[0], editableData[key]);
      store.state.act = Math.random()
      delete editableData[key]
    };

    const cancel = key => {
      delete editableData[key];
    };

    /**
     * 增加减少行
     */
    const handleAdd = () => {
      dataSource.value.push({key:`${dataSource.value.length}`, value: 0, name: '新数据集'});
      cahrtTemplate[store.state.preChartType].series[0].data.push({key:`${dataSource.value.length - 1}`, value: 0, name: '新数据集'})
    };
    function onDelete() {
      dataSource.value.pop();
      cahrtTemplate[store.state.preChartType].series[0].data.pop()
    }


    /**
     * 修改title
     */
    function changeTitle() {
      ElMessageBox.prompt('改变图标Title', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
        .then(({ value }) => {
            chartTitle.value = value
            ElMessage({
              type: 'success',
              message: `已改变Title`,
            });
            cahrtTemplate[store.state.preChartType].title.text = value
          })
        .catch(() => {
            ElMessage({
              type: 'info',
              message: '取消操作',
            });
          });
    }

    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
      chartTitle,
      handleAdd,
      onDelete,
      changeTitle
    };
  },
});
</script>
<style scoped>
.upload {
  z-index: 10;
  position: fixed;
  top: 80px;
  transform: scale(2);
  right: 30px;
  color: #409eff;
}
.editable-row-operations a {
  margin-right: 8px;
}
</style>