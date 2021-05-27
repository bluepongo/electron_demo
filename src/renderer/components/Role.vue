<template>
  <div
    class="container"
    id="Task"
  >
    <div style="margin-top:20px;">
      <el-table
        background-color="transport"
        :data="list"
        border
        fit>
        <el-table-column align="center" label="角色名称" width="100">
          <template slot-scope="scope">
            {{ scope.row.role_name }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="角色血量" width="80">
          <template slot-scope="scope">
            {{ scope.row.hp }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="生存分数" width="80">
          <template slot-scope="scope">
            {{ scope.row.suv_score }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="座位位置" width="80">
          <template slot-scope="scope">
            {{ scope.row.seat }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="技能">
          <template slot-scope="scope">
            {{ scope.row.des }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getRoleInfo } from '@/api/roles'
export default {
  data () {
    return {
      list: null
    }
  },
  created () {
    this.fetchRoleInfo()
  },
  methods: {
    fetchRoleInfo () {
      getRoleInfo().then(response => {
        this.list = response.data.data
      })
    }
  }
}
</script>
<style>
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

.container {
  padding: 20px;
}

.text {
  color:#FFFFFF;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}

.active{
  background: rgb(206, 206, 206);
}

.el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}

.el-table th,
.el-table tr,
.el-table td {
  color: #b9b7ba;
  background-color: transparent !important;
}

.el-table tbody tr:hover>td {
  background-color: #367f7f78 !important
}

.el-table__row--striped td {
  background-color: #45797b33 !important
}

.el-table__row:not(.el-table__row--striped) {
  background: #1439391c !important;
}

</style>
