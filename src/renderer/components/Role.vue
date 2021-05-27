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
        <el-table-column align="center" label="Name" width="100">
          <template slot-scope="scope">
            {{ scope.row.role_name }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="HP" width="80">
          <template slot-scope="scope">
            {{ scope.row.hp }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="Survive Score" width="80">
          <template slot-scope="scope">
            {{ scope.row.suv_score }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="Seat" width="80">
          <template slot-scope="scope">
            {{ scope.row.seat }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="Skill">
          <template slot-scope="scope">
            {{ scope.row.des }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top:20px;">
      <el-input v-model="name" placeholder="Please enter the name of the role" style="width: 300px;"></el-input>
      <el-button style="margin-left: 20px;" icon="el-icon-search" type="info" @click="fetchRoleInfoByName" circle></el-button>
      <el-button icon="el-icon-arrow-left" style="margin-left: 200px;" circle></el-button>
    </div>

    <el-dialog
      title="Role Info"
      :visible.sync="dialogVisible"
      width="90%"
      :before-close="handleClose">
      <el-table
        background-color="transport"
        :data="roleList"
        border
        fit>
        <el-table-column align="center" label="Name" width="100">
          <template slot-scope="scope">
            {{ scope.row.role_name }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="HP" width="80">
          <template slot-scope="scope">
            {{ scope.row.hp }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="Survive Score" width="80">
          <template slot-scope="scope">
            {{ scope.row.suv_score }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="Seat" width="80">
          <template slot-scope="scope">
            {{ scope.row.seat }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="Skill">
          <template slot-scope="scope">
            {{ scope.row.des }}
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" style="margin-right: 40px; margin-top: 20px;">
        <el-button icon="el-icon-arrow-left" @click="dialogVisible=false" circle></el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getRoleInfo, getRoleInfoByName } from '@/api/roles'
export default {
  data () {
    return {
      dialogVisible: false,
      roleList: [],
      list: null,
      name: ''
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
    },
    fetchRoleInfoByName (name) {
      this.dialogVisible = true
      this.roleList = []
      getRoleInfoByName(this.name).then(response => {
        if (response.data.data != null) {
          this.roleList.push(response.data.data)
        }
      })
    },
    handleClose (done) {
      done()
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
