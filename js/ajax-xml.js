
var count=0;
var Doc;

$(function(){
	$('#search-btn').click(function(){
		
		var input = $('#swimarea').val();
			if(input=='부산')
			{
				displaysearch();		
			}
			else
			{
				alert('지역을 찾을 수 없습니다.')
			}
		});
	$('#cancel-btn').click(function(){
		displayclear();
	});
});


function displaysearch()
{
	$.ajax({
			url:'./js/poollist.xml',
			type:'get',
			dataType:'xml',
			timeout:1000,
			success:function(xmlDoc)
			{
				Doc=xmlDoc;
				count =$(xmlDoc).find('pool').size();
				displayPool();
			},
			error:function()
			{
				alert("지역을 찾을 수 없습니다.");
			}
		});
}

function displayPool()
{
	var i, tagList='', area='', name='', location='', c_number='';
	tagList = '<li data-role="list-divider">수영장 목록</li>';

	if(count > 0)
	{
		for(i=0; i<count; i+=1)
		{
			$record = $(Doc).find('pool').eq(i);
			tagList += '<li><p class="ui-li-aside">'+$record.attr('area')+'</p>';
			tagList += '<h2>'+$record.find('name').text()+'</h2>';
			tagList += '<p>'+$record.find('location').text()+'</p>';
			tagList += '<p>'+$record.find('c_number').text()+'</p></li>';
		}
	}
	$('#poollistview').html(tagList);
	$('#poollistview').listview('refresh');
}

function displayclear()
{
	var i, tagList='', area='', name='', location='', c_number='';
	tagList = '<li data-role="list-divider">수영장 목록</li>';

	$('#poollistview').html(tagList);
	$('#poollistview').listview('refresh');
}
