
var db = null;
var var_no = null;
var position = null;
var index = null;

//데이터 베이스 생성 및 오픈
function openDB()
{
	db = window.openDatabase('poolDB', '1.0', '풀DB', 1024*1024);
	console.log('1: DB 생성');
}

// 테이블 생성 트랜잭션 실행
function createTable()
{
	db.transaction(function(tr){
	/*var createSQL = 'drop table pool'; */
		var createSQL = 'create table if not exists pool(type text, name text, title text, content text)';
		tr.executeSql(createSQL, [], function()
		{
			console.log('2-1.테이블 생성 sql 실행 성공');
		}, function()
		{
			console.log('2-1.테이블 생성 sql 실행 실패');
		});
	});
}
// db 비우는 법  : var createSQL = 'create table if not … 부분 주석처리 하고 var = createSQL = 'drop table pool'; 입력하면 됨 

//데이터 입력 트랜잭션 실행
function insertbull()
{
	db.transaction(function(tr)
	{
		var type = $('#community').val();
		var name = $('#w_name').val();
		var title = $('#w_title').val();
		var content = $('#w_content').val();
		/*alert(type+" "+name+ " " + title+ " " + content);*/
		var insertSQL = 'insert into pool(type,name,title,content) values(?,?,?,?)';

		tr.executeSql(insertSQL,[type,name,title,content],function(tr,rs){
			console.log('3.')
			alert('글쓰기 완료!');	
			$().val('미정').attr('selected','selected');
			$().selectmenu('refresh');
			location.reload();
		}, function(tr,err){
			alert('DB오류');
		});
	})
}

function selectcommunity(type)
{	

	db.transaction(function(tr){

		var selectSQL = 'select type,name,title,content from pool where type=?';
		tr.executeSql(selectSQL,[type],function(tr,rs){
			count = rs.rows.length;
			var bullList ='';
			
			var i = 0;
		if(count > 0)
			{
				for(i=0; i<count; i+=1)
				{
					/*bullList += '<li><a href="#"><p class="ui-li-aside">'+rs.rows.item(i).name+'</p>';
					bullList += '<h2>'+rs.rows.item(i).title+'</h2><br>';
					bullList += '<p>'+ rs.rows.item(i).content +'</p></a></li>';*/
					bullList += '<li><a href="#"><p class="ui-li-aside">'+rs.rows.item(i).name+'</p>';
					bullList += '<h2>'+rs.rows.item(i).title+'</h2><br>';
					bullList += '<p>'+ rs.rows.item(i).content +'</p><span class="ui-li-count">new!</span></a></li>';
				}
					if(type=="후기")
					{
						$('#review_bullli').html(bullList);
						$('#review_bullli').listview('refresh');
					}
					else if (type=="벼룩")
					{
						$('#market_bullli').html(bullList);
						$('#market_bullli').listview('refresh');
					}
					else if (type=="지역")
					{
						$('#area_bullli').html(bullList);
						$('#area_bullli').listview('refresh');
					}
					else if (type=="자유")
					{
						$('#free_bullli').html(bullList);
						$('#free_bullli').listview('refresh');
					}
			}
		}, function(tr,err){
			alert('DB오류');
		});
	});
}