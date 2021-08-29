<template>
  <div v-if="!visible">
    <a-table style="width:97%" bordered :data-source="dataSource" :columns="columns" :pagination="false">
      <template #customTite>
          <!-- <div v-if="editableData[chartTitle]" class="editable-cell-input-wrapper">
            <a-input v-model:value="editableData[chartTitle]" @pressEnter="saveTitle" />
            <check-outlined class="editable-cell-icon-check" @click="saveTitle" />
          </div>
          <div v-else class="editable-cell-text-wrapper">
            {{ chartTitle || ' ' }}
            <edit-outlined class="editable-cell-icon" @click="editTitle" />
          </div> -->
          <div style="cursor:pointer"  @click="changeTitle">
            {{chartTitle}}
          </div>
      </template>
      
      <template #edit="{ text, record}">
        <div class="editable-cell">
          <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
            <a-input v-model:value="editableData[record.key].name" @pressEnter="save(record.key)" />
            <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
          </div>
          <div v-else class="editable-cell-text-wrapper">
            {{ text || ' ' }}
            <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
          </div>
        </div>
    </template>
    </a-table>

   
    <a-popconfirm  v-if="dataSource.length > 1" title="确定删除最后一行吗" @confirm="onDelete">
      <a-button   style="width:48.5%;" ><i class="el-icon-minus"></i></a-button>
    </a-popconfirm>
    <a-button v-else class="editable-add-btn" @click="handleAdd" style="width: 100%;"><i class="el-icon-plus" style=""></i></a-button>
    <a-button v-if="dataSource.length > 1" class="editable-add-btn" @click="handleAdd" style="width: 48.5%; margin-right:3%;"><i class="el-icon-plus" style=""></i></a-button>
    
    <div class="aditColum">
      <a-popconfirm v-if="columns.length > 1" title="确定删除最后一列吗" @confirm="deleteColumn">
      <a-button  id="minus" style="width:100%;height:50%;padding:0;" ><i class="el-icon-minus"></i></a-button>
      </a-popconfirm>
      <a-button  v-else @click="addColumn" style="width:100%;height:100%; padding:0;"><i class="el-icon-plus" style=""></i></a-button>
      <a-button v-if="columns.length > 1"  @click="addColumn" style="width:100%;height:50%; padding:0;"><i class="el-icon-plus" style=""></i></a-button>
    </div>
  </div>
  <a-form v-if="visible" style="margin-top:15px;" :model="formState" v-bind="formItemLayout">
    <div style="display:flex;">
    <a-form-item style="width:50%;" label="X轴" >
      <a-input v-model:value="xData" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item style="width:50%;" label="Y轴" >
      <a-input v-model:value="yData" placeholder="input placeholder" />
    </a-form-item>
    </div>
    <a-form-item v-for="(item,index) in formState" :key="index"  :label="item.name" >
      <a-input v-model:value="item.data" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item v-bind="{wrapperCol: { span: 24 }}">
      <a-button type="primary" @click="visible = false" style="margin-right:20%">取消操作</a-button>
      <a-button type="primary" @click="handleOk">保存数据</a-button>
    </a-form-item>
  </a-form>
   <i @click="editData" class="el-icon-edit editData"></i>
   <i @click="$router.push('/edit/upload')" index="1" class="el-icon-upload upload"></i><!-- <upload/> -->
</template>
<script>
import { computed, defineComponent, reactive, ref } from 'vue';
import { useStore } from 'vuex'
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { ElMessageBox } from 'element-plus';
import { ElMessage } from 'element-plus';
import { cahrtTemplate } from '@/common/chart/chart'

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup() {
    const xData = ref('')
    const yData = ref('件')
    let columnNum = 6
    const visible = ref(false)
    const store = useStore()
    const columns = ref([
      {
        dataIndex: 'name',
        slots: {
          title:'customTite',
          customRender: 'edit',
        },
      },
      {
        title: '衬衫',
        dataIndex: '0',
      },
      {
        title: '羊毛衫',
        dataIndex: '1',
      },
      {
        title: '雪纺衫',
        dataIndex: '2',
      },
      {
        title: '裤子',
        dataIndex: '3',
      },
      {
        title: '高跟鞋',
        dataIndex: '4',
      },
      {
        title: '袜子',
        dataIndex: '5',
      }
    ]);
    const dataSource = ref([
      {
        key: '0',
        name:"销量",
        0: 18,
        1: 20,
        2: 36,
        3: 15,
        4: 10,
        5: 20,
      },
      {
        key: '1',
        name:"库存",
        0: 20,
        1: 25,
        2: 39,
        3: 18,
        4: 15,
        5: 22,
      },
    ]);

    
    const count = computed(() => dataSource.value.length + 1);
    const editableData = reactive({});
    const edit = key => {
      editableData[key] = dataSource.value.filter(item => key === item.key)[0];
    };

    const save = key => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      cahrtTemplate[store.state.preChartType].series[key].name = editableData[key].name
      delete editableData[key];
      store.state.act = Math.random()
    };

    /**
     * 修改行
     */
    const handleAdd = () => {
      const newData = {
        key: `${count.value-1}`,
        name: `数据集${count.value}`,
      };
      const newChartData = {
        name: `数据集${count.value}`,
        data: [],
        type: 'bar'
      }
      let index = 0
      while(index < columnNum)
      {
        newData[index] = 0;
        index++;
        newChartData.data.push(0)
      }
      dataSource.value.push(newData);
      cahrtTemplate[store.state.preChartType].series.push(newChartData)
    };
    function onDelete() {
      dataSource.value.pop();
      cahrtTemplate[store.state.preChartType].series.pop()
    }


    //不知道为什么不行
    //function editTitle() {
      //editableData['chartTitle'] = chartTitle.value
    //}
    /**
     * 修改title
     */
    const chartTitle = ref('商场销量柱状图')
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

    /**
     * 修改列数
     */
    function addColumn() {   
      ElMessageBox.prompt('输入需要增加的列名', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
            columns.value.push({
               title: value,
               dataIndex: columnNum,
            })
            cahrtTemplate[store.state.preChartType].xAxis.data.push(value)
            for(let index = 0; index < count.value - 1; index++)
            {
              dataSource.value[index][columnNum] = 0
              cahrtTemplate[store.state.preChartType].series[index].data[columnNum] = 0
            }
            columnNum++
            ElMessage({
              type: 'success',
              message: `已增加`,
            });
          })
          
    }
    function deleteColumn() {
          columnNum--;
          columns.value.pop()
          for(let i = 0; i < count.value - 1; i++)
          cahrtTemplate[store.state.preChartType].series[i].data.pop()
          cahrtTemplate[store.state.preChartType].xAxis.data.pop()
    }

    /**
     * 修改数据，表单样式
     */
    const formState = ref([]);
    const formItemLayout =reactive({labelCol: {span: 6,},wrapperCol: {span: 14,},})
    function editData() {
      if(visible.value){
        visible.value = false
        return
      }
      formState.value = []
      for(let i =0; i < count.value - 1; i++){
        formState.value.push({name: dataSource.value[i].name})
        formState.value[i].data = [];
        for(let j = 0; j < columnNum; j++)
        formState.value[i].data.push(dataSource.value[i][j])
        formState.value[i].data = formState.value[i].data.toString()
      }
      visible.value = true
    }
    function handleOk() {
      for(let i = 0; i < formState.value.length; i++)
      formState.value[i].data = formState.value[i].data.split(',').map(item=>{return parseFloat(item) })
      for(let i = 0; i < formState.value.length; i++){
        for(let j = 0; j < columnNum; j++){
          dataSource.value[i][j] = formState.value[i].data[j]
        }
      }
      for(let i = 0; i < formState.value.length; i++){
        cahrtTemplate[store.state.preChartType].series[i].data = formState.value[i].data
      }
      cahrtTemplate[store.state.preChartType].xAxis.name = xData.value
      cahrtTemplate[store.state.preChartType].yAxis.name = yData.value
      visible.value = false
    }

    return {
      columns,
      handleAdd,
      dataSource,
      editableData,
      count,
      edit,
      save,
      chartTitle,
      changeTitle,
      addColumn,
      deleteColumn,
      visible,
      formState,
      formItemLayout,
      handleOk,
      editData,
      onDelete,
      xData,
      yData
    };
  },
});
</script>
<style lang="less">
  .editData {
    z-index: 10;
    position: fixed;
    top: 130px;
    transform: scale(2);
    right: 30px;
    color: #409eff;
  }
  .upload {
    z-index: 10;
    position: fixed;
    top: 80px;
    transform: scale(2);
    right: 30px;
    color: #409eff;
  }
  .aditColum {
    display: flex;
    flex-direction: column;
    width: 3%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
  .ant-input {
    border: 0;
    background: #fafafa;
  }
  .editable-cell {
    position: relative;
    .editable-cell-input-wrapper,
    .editable-cell-text-wrapper {
      padding-right: 24px;
    }

    .editable-cell-text-wrapper {
      padding: 5px 24px 5px 5px;
    }

    .editable-cell-icon,
    .editable-cell-icon-check {
      position: absolute;
      right: 0;
      width: 20px;
      cursor: pointer;
    }

    .editable-cell-icon {
      margin-top: 4px;
      display: none;
    }

    .editable-cell-icon-check {
      line-height: 28px;
    }

    .editable-cell-icon:hover,
    .editable-cell-icon-check:hover {
      color: #108ee9;
    }

    .editable-add-btn {
      margin-bottom: 8px;
    }
  }
  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }
</style>